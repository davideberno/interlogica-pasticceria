import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { LoadingErrorData, Sweet, SweetReq } from "types";

const initialState: LoadingErrorData<Sweet[]> = {
  loading: false,
  data: undefined,
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
    addSweet: (state, action: PayloadAction<SweetReq>) => {
      state.loading = true;
    },
    addSweetSuccess: (state, action: PayloadAction<Sweet>) => {
      const sweets = state?.data || [];
      state.data = [...sweets, action.payload];
      state.loading = false;
    },
    addSweetFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    editSweet: (state, action: PayloadAction<Omit<Sweet, "recipe"> & { recipe: string }>) => {
      state.loading = true;
    },
    editSweetSuccess: (state, action: PayloadAction<Sweet>) => {
      const sweets = state?.data || [];
      const updatedSweet = action.payload;
      const newSweets = sweets.map((r) => (r._id === updatedSweet._id ? updatedSweet : r));
      state.data = newSweets;
      state.loading = false;
    },
    editSweetFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteSweet: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteSweetSuccess: (state, action: PayloadAction<Sweet>) => {
      const sweets = state?.data || [];
      const deletedSweet = action.payload;
      state.data = sweets.filter((i) => i._id !== deletedSweet._id);
      state.loading = false;
    },
    deleteSweetFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

//Actions
export const {
  fetchSweets,
  fetchSweetsSuccess,
  fetchSweetsFailed,
  addSweet,
  addSweetSuccess,
  addSweetFailed,
  editSweet,
  editSweetSuccess,
  editSweetFailed,
  deleteSweet,
  deleteSweetSuccess,
  deleteSweetFailed,
} = sweetsSlice.actions;

//Selectors
export const selectSweetsLoading = (state: RootState) => state.sweets.loading;
export const selectSweetsList = (state: RootState) => state.sweets.data;
export const selectSweetsError = (state: RootState) => state.sweets.error;

//Reducer
export const sweetsReducer = sweetsSlice.reducer;
