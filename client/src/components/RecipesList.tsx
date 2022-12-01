import React, { FC, useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { Add } from "@mui/icons-material";

import { RecipeDialog, RecipeCard } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectRecipesList, fetchRecipes } from "slices/recipes";
import { ListProps } from "types";

export interface RecipesListProps extends ListProps {}

interface Dialogs {
  newRecipe: boolean;
}

export const RecipesList: FC<RecipesListProps> = ({ gridArea }) => {
  const dispatch = useAppDispatch();

  const recipesList = useAppSelector(selectRecipesList);

  const [isDialogOpen, setIsDialogOpen] = useState({
    newRecipe: false,
  });

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleOpenDialog = (dialog: keyof Dialogs) => {
    setIsDialogOpen({ ...isDialogOpen, [dialog]: true });
  };

  const handleCloseDialog = (dialog: keyof Dialogs) => {
    setIsDialogOpen({ ...isDialogOpen, [dialog]: false });
  };

  return (
    <>
      {isDialogOpen.newRecipe && <RecipeDialog open={isDialogOpen.newRecipe} onClose={() => handleCloseDialog("newRecipe")} />}

      <Box
        sx={{
          gridArea: gridArea,
          padding: 4,
        }}
      >
        <Grid container justifyContent="space-between" marginBottom={2}>
          <Typography variant="h4">Ricette</Typography>

          <Button color="primary" startIcon={<Add />} onClick={() => handleOpenDialog("newRecipe")}>
            Aggiungi ricetta
          </Button>
        </Grid>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
          {recipesList?.map((recipe) => (
            <RecipeCard key={recipe?._id} recipe={recipe} />
          ))}
        </Box>
      </Box>
    </>
  );
};
