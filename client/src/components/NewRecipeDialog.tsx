import React, { FC, useEffect } from "react";
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
import { Ingredient } from "types";

export interface NewRecipeDialogProps extends DialogProps {
  handleClose: () => void;
}

export const NewRecipeDialog: FC<NewRecipeDialogProps> = ({ open, handleClose, ...props }) => {
  const dispatch = useAppDispatch();
  const ingredientsList = useAppSelector(selectIngredientsList);
  const [ingredients, setIngredients] = React.useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const handleChange = (event: SelectChangeEvent<typeof ingredients>) => {
    const {
      target: { value },
    } = event;
    setIngredients(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth {...props}>
      <DialogTitle>Nuova ricetta</DialogTitle>
      <DialogContent>
        <TextField id="name" label="Nome" type="name" sx={{ marginY: 1, width: "100%" }} />
        <FormControl sx={{ marginY: 1, width: "100%" }}>
          <InputLabel>Ingredienti</InputLabel>
          <Select
            multiple
            value={ingredients}
            onChange={handleChange}
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
        <Button onClick={handleClose}>Cancella</Button>
        <Button onClick={handleClose}>Aggiungi</Button>
      </DialogActions>
    </Dialog>
  );
};
