import React, { FC, useState } from "react";
import { Box, Typography, Card, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { DeleteDialog } from "components";
import { useAppDispatch } from "hooks";
import { deleteIngredient } from "slices/ingredients";
import { Ingredient } from "types";

export interface IngredientCardProps {
  ingredient: Ingredient;
}

export const IngredientCard: FC<IngredientCardProps> = ({ ingredient }) => {
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteIngredient(ingredient._id));
  };

  return (
    <>
      {isDialogOpen && (
        <DeleteDialog label={ingredient.name} open={isDialogOpen} onClose={() => setIsDialogOpen(false)} onDelete={handleDelete} />
      )}
      <Card
        sx={{
          paddingX: 2,
          paddingY: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">{ingredient?.name}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100px",
          }}
        >
          <Typography variant="h6">{ingredient.unit}</Typography>
          <IconButton onClick={() => setIsDialogOpen(true)}>
            <Delete />
          </IconButton>
        </Box>
      </Card>
    </>
  );
};
