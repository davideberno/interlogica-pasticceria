import React, { FC, useState, useEffect, ChangeEvent } from "react";
import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  OutlinedInput,
  Select,
  Box,
  MenuItem,
  Chip,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectIngredientsList, fetchIngredients } from "slices/ingredients";
import { addRecipe, editRecipe } from "slices/recipes";
import { Recipe } from "types";

export interface RecipeDialogProps extends DialogProps {
  recipe?: Recipe;
  onClose: () => void;
}

export const RecipeDialog: FC<RecipeDialogProps> = ({ onClose, recipe, ...props }) => {
  const dispatch = useAppDispatch();
  const ingredientsList = useAppSelector(selectIngredientsList);

  const [name, setName] = useState(recipe?.name || "");
  const [selectedIngredients, setSelectedIngredients] = React.useState<string[]>(recipe?.ingredients.map((i) => i._id) || []);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSelectIngredient = (event: SelectChangeEvent<typeof selectedIngredients>) => {
    const {
      target: { value },
    } = event;
    setSelectedIngredients(typeof value === "string" ? value.split(",") : value);
  };

  const handleAddNewRecipe = () => {
    dispatch(
      addRecipe({
        name: name,
        ingredients: selectedIngredients,
      })
    );
    onClose();
  };

  const handleUpdateRecipe = () => {
    if (recipe) {
      dispatch(
        editRecipe({
          _id: recipe._id,
          name: name,
          ingredients: selectedIngredients,
        })
      );
      onClose();
    }
  };

  return (
    <Dialog onClose={onClose} fullWidth {...props}>
      <DialogTitle>Nuova ricetta</DialogTitle>

      <DialogContent>
        <TextField name="name" label="Nome" value={name} onChange={handleNameChange} sx={{ marginY: 1, width: "100%" }} />
        <FormControl sx={{ marginY: 1, width: "100%" }}>
          <InputLabel>Ingredienti</InputLabel>
          <Select
            name="ingredients"
            multiple
            value={selectedIngredients}
            onChange={handleSelectIngredient}
            input={<OutlinedInput label="Ingredienti" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={ingredientsList?.find((i) => i._id === value)?.name} />
                ))}
              </Box>
            )}
          >
            {ingredientsList?.map((ingredient) => (
              <MenuItem key={ingredient._id} value={ingredient._id}>
                {ingredient.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancella</Button>
        {recipe ? <Button onClick={handleUpdateRecipe}>{"Aggiorna"}</Button> : <Button onClick={handleAddNewRecipe}>{"Aggiungi"}</Button>}
      </DialogActions>
    </Dialog>
  );
};
