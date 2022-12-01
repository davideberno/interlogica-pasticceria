import React, { FC } from "react";
import { Link } from "react-router-dom";
import { styled, AppBar, Toolbar, Typography } from "@mui/material";

import { AppRoutes } from "types";

import logo from "assets/cupcake.svg";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Navbar: FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <img src={logo} alt="logo" width={80} />
        <StyledLink to={AppRoutes.Root}>
          <Typography variant="h4" fontWeight={600}>
            The Bakery
          </Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};
