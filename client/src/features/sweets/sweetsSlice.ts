import { createSlice } from "@reduxjs/toolkit";

import { Sweet } from "types";

import sacherImg from "assets/sacher.jpg";
import paradisoImg from "assets/paradiso.jpg";

interface SweetsState {
  items: Sweet[];
}

const initialState: SweetsState = {
  items: [
    {
      id: "1",
      name: "Torta Paradiso",
      price: 14,
      // imgUrl: paradisoImg,
      ingredients: [],
    },
    {
      id: "2",
      name: "Torta Sacher",
      price: 22,
      imgUrl: sacherImg,
      ingredients: [],
    },
  ],
};

export const counterSlice = createSlice({
  name: "sweets",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
