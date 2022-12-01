import React, { FC } from "react";
import { Box, AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";

import { SweetsList, RecipesList, IngredientsList } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectUser, logout } from "slices/auth";

export const AdminPage: FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    if (user) {
      dispatch(logout(user));
    }
  };

  return (
    <Box
      sx={{
        height: "calc(100% - 142px)",
      }}
    >
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
          padding: 2,
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridTemplateRows: "1fr 1fr",
          gridTemplateAreas: `"recipes sweets"
                              "ingredients sweets"`,
          gap: 4,
          height: "calc(100% - 40px)",
        }}
      >
        <RecipesList gridArea="recipes" />
        <IngredientsList gridArea="ingredients" />
        <SweetsList gridArea="sweets" />
      </Box>
    </Box>
  );
};
