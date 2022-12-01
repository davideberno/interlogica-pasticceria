import React, { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export interface LoadingPageProps {
  open: boolean;
}

export const LoadingPage: FC<LoadingPageProps> = ({ open }) => {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress size={60} color="inherit" />
    </Backdrop>
  );
};
