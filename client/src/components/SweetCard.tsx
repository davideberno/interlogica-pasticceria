import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Skeleton, IconButton, Chip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import { useAppDispatch } from "hooks";
import { deleteSweet } from "slices/sweets";
import { IngredientsChipList, DeleteDialog, PutUpToSaleDialog } from "components";
import { Sweet, AppRoutes } from "types";

export interface SweetCardProps {
  sweet: Sweet;
  expiryFactor?: number;
}

interface Dialogs {
  edit: boolean;
  delete: boolean;
}

export const SweetCard: FC<SweetCardProps> = ({ sweet, expiryFactor = 1 }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const isExpired = expiryFactor === 0;
  const isAdmin = pathname === AppRoutes.Admin;

  const [isDialogOpen, setIsDialogOpen] = useState<Dialogs>({
    edit: false,
    delete: false,
  });

  const handleOpenDialog = (dialog: keyof Dialogs) => {
    setIsDialogOpen({ ...isDialogOpen, [dialog]: true });
  };

  const handleCloseDialog = (dialog: keyof Dialogs) => {
    setIsDialogOpen({ ...isDialogOpen, [dialog]: false });
  };

  const handleDeleteSweet = () => {
    dispatch(deleteSweet(sweet._id));
  };

  return (
    <>
      {isDialogOpen.edit && (
        <PutUpToSaleDialog recipe={sweet.recipe} sweet={sweet} open={isDialogOpen.edit} onClose={() => handleCloseDialog("edit")} />
      )}
      {isDialogOpen.delete && (
        <DeleteDialog
          label={sweet?.recipe?.name}
          open={isDialogOpen.delete}
          onClose={() => handleCloseDialog("delete")}
          onDelete={handleDeleteSweet}
        />
      )}

      <Card
        sx={{
          display: "grid",
          gridTemplateColumns: "250px auto 120px",
          width: "100%",
          minWidth: "550px",
          minHeight: "250px",
        }}
      >
        {false ? (
          <CardMedia component="img" height="250" image={""} alt={""} />
        ) : (
          <Skeleton variant="rectangular" width={250} height={250} animation={false} />
        )}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography gutterBottom variant="h4" component="div">
              {sweet?.recipe?.name}
              {isAdmin && isExpired && <Chip color="error" label="Scaduto" size="small" sx={{ marginLeft: 4 }} />}
            </Typography>
            <Typography variant="body1">
              Prezzo: {(sweet?.price * expiryFactor).toFixed(1)}€{" "}
              {expiryFactor < 1 && expiryFactor > 0 && (
                <Chip color="success" label={`- ${100 - expiryFactor * 100}%`} size="small" sx={{ marginLeft: 4 }} />
              )}
            </Typography>
            {isAdmin && <Typography variant="body1">Prezzo pieno: {sweet?.price}€</Typography>}
            <Typography variant="body1">Quantitá: {sweet?.quantity}</Typography>
            <Typography variant="body1">Data: {new Date(sweet?.createdAt || "").toLocaleDateString()}</Typography>
          </Box>
          <IngredientsChipList ingredients={sweet?.recipe?.ingredients} />
        </CardContent>
        {isAdmin && (
          <CardActions
            sx={{
              alignSelf: "flex-start",
            }}
          >
            <IconButton onClick={() => handleOpenDialog("edit")}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => handleOpenDialog("delete")}>
              <Delete />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </>
  );
};
