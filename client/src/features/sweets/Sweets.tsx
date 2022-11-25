import React, { FC } from "react";
import { Grid } from "@mui/material";

import { useAppSelector } from "hooks";
import { SweetCard } from "components";

export const Sweets: FC = () => {
  const sweets = useAppSelector((state) => state.sweets.items);

  return (
    <Grid container spacing={4} justifyContent="center">
      {sweets.map((sweet) => (
        <Grid item>
          <SweetCard key={sweet.id} sweet={sweet} />
        </Grid>
      ))}
    </Grid>
  );
};
