import React, { FC } from "react";
import { Snackbar as MuiSnackbar, Alert, AlertColor } from "@mui/material";

export interface SnackbarProps {
  open: boolean;
  message: string;
  type: AlertColor;
  onClose: () => void;
}

export const Snackbar: FC<SnackbarProps> = ({ open, message, type, onClose }) => {
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
