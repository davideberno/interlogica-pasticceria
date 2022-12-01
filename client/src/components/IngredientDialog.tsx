import React, { FC, useState } from "react";
import { Dialog, DialogProps, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from "@mui/material";

import { useAppDispatch } from "hooks";
import { addIngredient } from "slices/ingredients";
import { Unit } from "types";

export interface IngredientDialogProps extends DialogProps {
  onClose: () => void;
}

export const IngredientDialog: FC<IngredientDialogProps> = ({ onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [unit, setUnit] = useState<Unit>("g");

  const handleNewIngredient = () => {
    dispatch(
      addIngredient({
        name,
        unit,
      })
    );
    onClose();
  };

  return (
    <Dialog onClose={onClose} {...props} fullWidth>
      <DialogTitle>Aggiungi ingrediente</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Ingrediente"
          value={name}
          onChange={(event) => setName(event.target.value)}
          sx={{ width: "320px", margin: 2 }}
        />
        <TextField
          label="Unitá di misura"
          select
          value={unit}
          onChange={(event) => setUnit(event.target.value as Unit)}
          sx={{ width: "120px", margin: 2 }}
        >
          <MenuItem value="g">g</MenuItem>
          <MenuItem value="ml">ml</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancella</Button>
        <Button onClick={handleNewIngredient}>{"Aggiungi"}</Button>
      </DialogActions>
    </Dialog>
  );
};
