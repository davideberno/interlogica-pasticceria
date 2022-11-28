import React, { FC } from "react";
import { Typography, TypographyProps, Link } from "@mui/material";

export interface CopyrightProps extends TypographyProps {}

export const Copyright: FC<CopyrightProps> = ({ ...props }) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        The Bakery
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
