import React, { FC, useEffect } from "react";
import { Grid, CircularProgress } from "@mui/material";

import { useAppSelector, useAppDispatch } from "hooks";
import { SweetCard } from "components";
import { fetchSweets, selectSweetsList, selectSweetsLoading } from "../slices/sweets/sweetsSlice";
import { ListProps } from "types";

export interface SweetsListProps extends ListProps {}

export const SweetsList: FC<SweetsListProps> = ({ gridArea }) => {
  const dispatch = useAppDispatch();
  const sweets = useAppSelector(selectSweetsList);
  const loading = useAppSelector(selectSweetsLoading);

  useEffect(() => {
    dispatch(fetchSweets());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        gridArea: gridArea,
        padding: 4,
      }}
    >
      {loading ? (
        <CircularProgress size={40} />
      ) : (
        sweets?.map((sweet) => (
          <Grid item key={sweet._id} xs={12}>
            <SweetCard sweet={sweet} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
