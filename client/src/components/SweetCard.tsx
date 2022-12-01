import React, { FC, useState } from "react";
import { Box, Card, CardMedia, CardContent, CardActions, Typography, Skeleton, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import { useAppDispatch } from "hooks";
import { deleteSweet } from "slices/sweets";
import { IngredientsChipList, DeleteDialog, PutUpToSaleDialog } from "components";
import { Sweet } from "types";

export interface SweetCardProps {
  sweet: Sweet;
}

interface Dialogs {
  edit: boolean;
  delete: boolean;
}

export const SweetCard: FC<SweetCardProps> = ({ sweet }) => {
  const dispatch = useAppDispatch();

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
        }}
      >
        {"" ? (
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
            </Typography>
            <Typography variant="body1">Prezzo: {sweet?.price}€</Typography>
            <Typography variant="body1">Quantitá: {sweet?.quantity}</Typography>
          </Box>
          <IngredientsChipList ingredients={sweet?.recipe?.ingredients} />
        </CardContent>
        <CardActions
          sx={{
            alignSelf: "flex-start",
          }}
        >
          <IconButton color="primary" onClick={() => handleOpenDialog("edit")}>
            <Edit />
          </IconButton>
          <IconButton color="primary" onClick={() => handleOpenDialog("delete")}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
