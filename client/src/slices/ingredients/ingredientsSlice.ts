import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { LoadingErrorData, Ingredient } from "types";

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
    addNewIngredient: (state) => {
      state.loading = true;
    },
    addNewIngredientSuccess: (state, action: PayloadAction<Ingredient>) => {
      const ingredients = state?.data || [];
      state.data = [...ingredients, action.payload];
      state.loading = false;
    },
    addNewIngredientFailed: (state, action: PayloadAction<string>) => {
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
  addNewIngredient,
  addNewIngredientSuccess,
  addNewIngredientFailed,
} = ingredientsSlice.actions;

//Selectors
export const selectIngredientsLoading = (state: RootState) => state.ingredients.loading;
export const selectIngredientsList = (state: RootState) => state.ingredients.data;
export const selectIngredientsError = (state: RootState) => state.ingredients.error;

//Reducer
export const ingredientsReducer = ingredientsSlice.reducer;
