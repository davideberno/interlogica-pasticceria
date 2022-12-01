import React, { ChangeEvent, FC, useState } from "react";
import { Button, Dialog, DialogProps, DialogTitle, DialogContent, DialogActions, TextField, InputAdornment } from "@mui/material";

import { useAppDispatch } from "hooks";
import { addSweet, editSweet } from "slices/sweets";
import { Recipe, Sweet } from "types";

export interface PutUpToSaleDialogProps extends DialogProps {
  recipe: Recipe;
  sweet?: Sweet;
  onClose: () => void;
}

export const PutUpToSaleDialog: FC<PutUpToSaleDialogProps> = ({ recipe, sweet, open, onClose, ...props }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = useState({
    quantity: sweet?.quantity || "",
    price: sweet?.price || "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleAddToSale = () => {
    if (values.price && values.quantity) {
      dispatch(
        addSweet({
          recipe: recipe._id,
          quantity: +values.quantity,
          price: +values.price,
        })
      );
      onClose();
    }
  };

  const handleUpdate = () => {
    if (sweet && values.price && values.quantity) {
      dispatch(
        editSweet({
          _id: sweet._id,
          recipe: recipe._id,
          quantity: +values.quantity,
          price: +values.price,
        })
      );
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} {...props}>
      <DialogTitle>
        {sweet ? "Aggiorna" : "Metti in vendita"} {recipe?.name}
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          size="small"
          label="Quantitá"
          name="quantity"
          type="number"
          margin="normal"
          InputProps={{
            startAdornment: <InputAdornment position="start">Nr.</InputAdornment>,
          }}
          value={values.quantity}
          onChange={handleChange}
        />
        <TextField
          size="small"
          label="Prezzo"
          name="price"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          value={values.price}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancella</Button>
        {sweet ? <Button onClick={handleUpdate}>Aggiorna</Button> : <Button onClick={handleAddToSale}>Aggiungi</Button>}
      </DialogActions>
    </Dialog>
  );
};
