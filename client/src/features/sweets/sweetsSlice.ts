import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { LoadingErrorData, Sweet } from "types";

const initialState: LoadingErrorData<Sweet[]> = {
  loading: false,
  data: [],
  error: undefined,
};

export const sweetsSlice = createSlice({
  name: "sweets",
  initialState,
  reducers: {
    fetchSweets: (state) => {
      state.loading = true;
    },
    fetchSweetsSuccess: (state, action: PayloadAction<Sweet[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchSweetsFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

//Actions
export const { fetchSweets, fetchSweetsSuccess, fetchSweetsFailed } = sweetsSlice.actions;

//Selectors
export const selectSweetsLoading = (state: RootState) => state.sweets.loading;
export const selectSweetsList = (state: RootState) => state.sweets.data;
export const selectSweetsError = (state: RootState) => state.sweets.error;

//Reducer
export const sweetsReducer = sweetsSlice.reducer;
