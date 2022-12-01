import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { LoadingErrorData, Recipe, RecipeReq } from "types";

const initialState: LoadingErrorData<Recipe[]> = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchRecipes: (state) => {
      state.loading = true;
    },
    fetchRecipesSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchRecipesFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addRecipe: (state, action: PayloadAction<RecipeReq>) => {
      state.loading = true;
    },
    addRecipeSuccess: (state, action: PayloadAction<Recipe>) => {
      const recipes = state?.data || [];
      state.data = [...recipes, action.payload];
      state.loading = false;
    },
    addRecipeFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    editRecipe: (state, action: PayloadAction<Omit<Recipe, "ingredients"> & { ingredients: string[] }>) => {
      state.loading = true;
    },
    editRecipeSuccess: (state, action: PayloadAction<Recipe>) => {
      const recipes = state?.data || [];
      const updatedRecipe = action.payload;
      const newRecipes = recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r));
      state.data = newRecipes;
      state.loading = false;
    },
    editRecipeFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteRecipeSuccess: (state, action: PayloadAction<Recipe>) => {
      const recipes = state?.data || [];
      const deletedRecipe = action.payload;
      state.data = recipes.filter((r) => r._id !== deletedRecipe._id);
      state.loading = false;
    },
    deleteRecipeFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

//Actions
export const {
  fetchRecipes,
  fetchRecipesSuccess,
  fetchRecipesFailed,
  addRecipe,
  addRecipeSuccess,
  addRecipeFailed,
  editRecipe,
  editRecipeSuccess,
  editRecipeFailed,
  deleteRecipe,
  deleteRecipeSuccess,
  deleteRecipeFailed,
} = recipesSlice.actions;

//Selectors
export const selectRecipesLoading = (state: RootState) => state.recipes.loading;
export const selectRecipesList = (state: RootState) => state.recipes.data;
export const selectRecipesError = (state: RootState) => state.recipes.error;

//Reducer
export const recipesReducer = recipesSlice.reducer;
