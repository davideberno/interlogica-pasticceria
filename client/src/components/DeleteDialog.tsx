import React, { FC } from "react";
import { Dialog, DialogProps, DialogTitle, DialogActions, Button } from "@mui/material";

export interface DeleteDialogProps extends DialogProps {
  label: string;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteDialog: FC<DeleteDialogProps> = ({ label, onClose, onDelete, ...props }) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <Dialog {...props} onClose={onClose}>
      <DialogTitle>Eliminare {label} ?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={handleDelete}>Si</Button>
      </DialogActions>
    </Dialog>
  );
};
