import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { useAppSelector, useAppDispatch } from "hooks";
import { SweetCard } from "components";
import { fetchSweets, selectSweetsList } from "../slices/sweets/sweetsSlice";
import { ListProps, AppRoutes } from "types";

export interface SweetsListProps extends ListProps {}

export const SweetsList: FC<SweetsListProps> = ({ gridArea }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const sweets = useAppSelector(selectSweetsList);

  const isAdmin = pathname === AppRoutes.Admin;

  useEffect(() => {
    dispatch(fetchSweets());
  }, [dispatch]);

  const calculateExpiry = (dateStr: string | undefined) => {
    if (dateStr) {
      const dayInMilliseconds = 86400000;
      const today = new Date().getTime();
      const date = new Date(dateStr).getTime();
      if (today - date > dayInMilliseconds * 3) return 0;
      if (today - date > dayInMilliseconds * 2) return 0.2;
      if (today - date > dayInMilliseconds * 1) return 0.8;
    }
    return 1;
  };

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
      {sweets?.map((sweet) => {
        const expiryFactor = calculateExpiry(sweet.createdAt);
        const isExpired = expiryFactor === 0;
        return isExpired && !isAdmin ? null : <SweetCard key={sweet._id} sweet={sweet} expiryFactor={expiryFactor} />;
      })}
    </Box>
  );
};
