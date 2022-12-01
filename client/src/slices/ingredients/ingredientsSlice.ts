import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { LoadingErrorData, Ingredient, IngredientReq } from "types";

const initialState: LoadingErrorData<Ingredient[]> = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    fetchIngredients: (state) => {
      state.loading = true;
    },
    fetchIngredientsSuccess: (state, action: PayloadAction<Ingredient[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchIngredientsFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addIngredient: (state, action: PayloadAction<IngredientReq>) => {
      state.loading = true;
    },
    addIngredientSuccess: (state, action: PayloadAction<Ingredient>) => {
      const ingredients = state?.data || [];
      state.data = [...ingredients, action.payload];
      state.loading = false;
    },
    addIngredientFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteIngredient: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteIngredientSuccess: (state, action: PayloadAction<Ingredient>) => {
      const ingredients = state?.data || [];
      const deletedIngredient = action.payload;
      state.data = ingredients.filter((i) => i._id !== deletedIngredient._id);
      state.loading = false;
    },
    deleteIngredientFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

//Actions
export const {
  fetchIngredients,
  fetchIngredientsSuccess,
  fetchIngredientsFailed,
  addIngredient,
  addIngredientSuccess,
  addIngredientFailed,
  deleteIngredient,
  deleteIngredientSuccess,
  deleteIngredientFailed,
} = ingredientsSlice.actions;

//Selectors
export const selectIngredientsLoading = (state: RootState) => state.ingredients.loading;
export const selectIngredientsList = (state: RootState) => state.ingredients.data;
export const selectIngredientsError = (state: RootState) => state.ingredients.error;

//Reducer
export const ingredientsReducer = ingredientsSlice.reducer;
