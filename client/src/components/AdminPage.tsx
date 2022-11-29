import React, { FC } from "react";
import { Box, AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

import { useAppDispatch, useAppSelector } from "hooks";
import { selectUser, logout } from "slices/auth";
import { SweetsList } from "components";

export const AdminPage: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    if (user) {
      dispatch(logout(user));
    }
  };

  return (
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
        <Box></Box>
        <Box>
          <SweetsList />
        </Box>
      </Box>
    </Box>
  );
};
