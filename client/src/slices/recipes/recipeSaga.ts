import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { api, ApiRoutes } from "api";
import {
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
} from "./recipesSlice";
import { Recipe, RecipeReq } from "types";

function* fetchAllRecipes() {
  try {
    const response: Recipe[] = yield call(api.getAll, ApiRoutes.Recipes);
    yield put(fetchRecipesSuccess(response));
  } catch (error) {
    yield put(fetchRecipesFailed(error as string));
  }
}

function* addNewRecipe(action: PayloadAction<RecipeReq>) {
  try {
    const response: Recipe = yield call(api.add, ApiRoutes.Recipes, action.payload);
    yield put(addRecipeSuccess(response));
  } catch (error) {
    yield put(addRecipeFailed(error as string));
  }
}

function* modifyRecipe(action: PayloadAction<RecipeReq>) {
  try {
    const response: Recipe = yield call(api.edit, ApiRoutes.Recipes, action.payload);
    yield put(editRecipeSuccess(response));
  } catch (error) {
    yield put(editRecipeFailed(error as string));
  }
}

function* removeRecipe(action: PayloadAction<string>) {
  try {
    const response: Recipe = yield call(api.delete, ApiRoutes.Recipes, action.payload);
    yield put(deleteRecipeSuccess(response));
  } catch (error) {
    yield put(deleteRecipeFailed(error as string));
  }
}

export function* recipesSaga() {
  yield takeLatest(fetchRecipes.type, fetchAllRecipes);
  yield takeLatest(addRecipe.type, addNewRecipe);
  yield takeLatest(editRecipe.type, modifyRecipe);
  yield takeLatest(deleteRecipe.type, removeRecipe);
}
