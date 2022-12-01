import React, { FC } from "react";
import { Chip, Box } from "@mui/material";

import { Ingredient } from "types";

export interface IngredientsChipListProps {
  ingredients: Ingredient[];
}

export const IngredientsChipList: FC<IngredientsChipListProps> = ({ ingredients }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
      {ingredients?.map((ingredient) => (
        <Chip key={ingredient?._id} label={ingredient?.name} size="small" />
      ))}
    </Box>
  );
};
