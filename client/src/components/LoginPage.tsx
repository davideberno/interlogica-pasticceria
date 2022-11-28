import React, { FC, FormEvent } from "react";
import { Avatar, Button, TextField, Box, Typography, Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

import { useAppDispatch } from "hooks";
import { login } from "../slices/auth/authSlice";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (email && password) dispatch(login({ email, password }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Backoffice
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
