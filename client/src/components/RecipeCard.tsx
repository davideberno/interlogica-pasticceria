import React, { FC, useState } from "react";
import { Card, CardActions, Typography, Box, Tooltip, IconButton } from "@mui/material";
import { Forward, Delete, Edit } from "@mui/icons-material";

import { useAppDispatch } from "hooks";
import { IngredientsChipList, PutUpToSaleDialog, RecipeDialog, DeleteDialog } from "components";
import { deleteRecipe } from "slices/recipes";
import { Recipe } from "types";

export interface RecipeCardProps {
  recipe: Recipe;
}

interface Dialogs {
  upToSale: boolean;
  delete: boolean;
  edit: boolean;
}

export const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState<Dialogs>({
    upToSale: false,
    delete: false,
    edit: false,
  });

  const handleOpenDialog = (dialog: keyof Dialogs) => {
    setIsDialogOpen({ ...isDialogOpen, [dialog]: true });
  };

  const handleCloseDialog = (dialog: keyof Dialogs) => {
    setIsDialogOpen({ ...isDialogOpen, [dialog]: false });
  };

  const handleDelete = () => {
    dispatch(deleteRecipe(recipe._id));
  };

  return (
    <>
      {isDialogOpen.upToSale && (
        <PutUpToSaleDialog open={isDialogOpen.upToSale} onClose={() => handleCloseDialog("upToSale")} recipe={recipe} />
      )}

      {isDialogOpen.edit && <RecipeDialog open={isDialogOpen.edit} onClose={() => handleCloseDialog("edit")} recipe={recipe} />}

      {isDialogOpen.delete && (
        <DeleteDialog open={isDialogOpen.delete} onClose={() => handleCloseDialog("delete")} label={recipe?.name} onDelete={handleDelete} />
      )}

      <Card sx={{ display: "flex", justifyContent: "space-between", padding: 2, minHeight: "120px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography variant="h6" marginBottom={1}>
            {recipe.name}
          </Typography>
          <IngredientsChipList ingredients={recipe.ingredients} />
        </Box>
        <CardActions>
          <Tooltip title="Modifica">
            <IconButton onClick={() => handleOpenDialog("edit")}>
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Elimina">
            <IconButton onClick={() => handleOpenDialog("delete")}>
              <Delete />
            </IconButton>
          </Tooltip>
          <Tooltip title="Metti in vendita">
            <IconButton onClick={() => handleOpenDialog("upToSale")}>
              <Forward />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
};
