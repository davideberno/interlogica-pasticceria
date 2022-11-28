import React, { FC } from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

import { useAppSelector, useAppDispatch } from "hooks";
import { selectUser, logout } from "slices/auth";

import logo from "assets/cupcake.svg";

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    if (user) {
      dispatch(logout(user));
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Grid container>
          <img src={logo} alt="logo" width={80} />
          <Typography variant="h4" fontWeight={600}>
            The Bakery
          </Typography>
        </Grid>
        {user && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
