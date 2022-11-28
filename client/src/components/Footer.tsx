import React, { FC } from "react";
import { Box, Container } from "@mui/material";

import { Copyright } from "components";

export const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
};
