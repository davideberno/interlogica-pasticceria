import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import logo from "assets/cupcake.svg";

export const Navbar: FC = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar>
      <img src={logo} alt="logo" width={80} />
      <Typography variant="h4" fontWeight={600} color="primary">
        The Bakery
      </Typography>
    </Toolbar>
  </AppBar>
);
