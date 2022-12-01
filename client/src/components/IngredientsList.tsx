import React, { FC, useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { Add } from "@mui/icons-material";

import { IngredientDialog, IngredientCard } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectIngredientsList, fetchIngredients } from "slices/ingredients";
import { ListProps } from "types";

export interface IngredientsListProps extends ListProps {}

export const IngredientsList: FC<IngredientsListProps> = ({ gridArea }) => {
  const dispatch = useAppDispatch();

  const ingredientsList = useAppSelector(selectIngredientsList);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      {isDialogOpen && <IngredientDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />}
      <Box
        sx={{
          gridArea: gridArea,
          padding: 4,
        }}
      >
        <Grid container justifyContent="space-between" marginBottom={2}>
          <Typography variant="h4">Ingredienti</Typography>

          <Button color="primary" startIcon={<Add />} onClick={() => setIsDialogOpen(true)}>
            Aggiungi ingrediente
          </Button>
        </Grid>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
          {ingredientsList?.map((ingredient) => (
            <IngredientCard ingredient={ingredient} />
          ))}
        </Box>
      </Box>
    </>
  );
};
