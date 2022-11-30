import React, { FC, useState } from "react";
import { Box, AppBar, Toolbar, Typography, Button, Grid, Tooltip, Fab, Modal } from "@mui/material";
import { Add } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectUser, logout } from "slices/auth";
import { SweetsList, NewRecipeDialog } from "components";

export interface Modals {
  newRecipe: boolean;
}

export const AdminPage: FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const [isModalOpen, setIsModalOpen] = useState({
    newRecipe: false,
  });

  const handleLogout = () => {
    if (user) {
      dispatch(logout(user));
    }
  };

  const handleOpenModal = (modal: keyof Modals) => {
    setIsModalOpen({ ...isModalOpen, [modal]: true });
  };

  const handleCloseModal = (modal: keyof Modals) => {
    setIsModalOpen({ ...isModalOpen, [modal]: false });
  };

  return (
    <>
      <NewRecipeDialog open={isModalOpen.newRecipe} handleClose={() => handleCloseModal("newRecipe")} />
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography>{user?.email}</Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <Box padding={4}>
            <Grid container justifyContent="space-around">
              <Typography variant="h4">Ricette</Typography>
              <Tooltip title="Aggiungi nuova ricetta">
                <Fab color="primary" size="small" onClick={() => handleOpenModal("newRecipe")}>
                  <Add />
                </Fab>
              </Tooltip>
            </Grid>
          </Box>
          <Box>
            <SweetsList />
          </Box>
        </Box>
      </Box>
    </>
  );
};
