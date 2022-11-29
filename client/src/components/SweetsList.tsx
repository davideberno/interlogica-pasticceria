import React, { FC, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";

import { useAppSelector, useAppDispatch } from "hooks";
import { SweetCard } from "components";
import { fetchSweets, selectSweetsList, selectSweetsLoading } from "../slices/sweets/sweetsSlice";

export const SweetsList: FC = () => {
  const dispatch = useAppDispatch();
  const sweets = useAppSelector(selectSweetsList);
  const loading = useAppSelector(selectSweetsLoading);

  useEffect(() => {
    dispatch(fetchSweets());
  }, [dispatch]);

  return (
    <Grid container spacing={4} padding={4}>
      {loading ? (
        <CircularProgress size={40} />
      ) : (
        sweets?.map((sweet) => (
          <Grid item key={sweet.id}>
            <SweetCard key={sweet.id} sweet={sweet} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
