import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";

import { useAppSelector, useAppDispatch } from "hooks";
import { SweetCard } from "components";
import { fetchSweets, selectSweetsList } from "../slices/sweets/sweetsSlice";
import { ListProps } from "types";

export interface SweetsListProps extends ListProps {}

export const SweetsList: FC<SweetsListProps> = ({ gridArea }) => {
  const dispatch = useAppDispatch();
  const sweets = useAppSelector(selectSweetsList);

  useEffect(() => {
    dispatch(fetchSweets());
  }, [dispatch]);

  return (
    <Box
      sx={{
        gridArea: gridArea,

        display: "flex",
        flexDirection: "column",
        gap: 2,
        overflowY: "auto",
        minHeight: "0px",
        height: "100%",
      }}
    >
      {sweets?.map((sweet) => (
        <SweetCard key={sweet._id} sweet={sweet} />
      ))}
    </Box>
  );
};
