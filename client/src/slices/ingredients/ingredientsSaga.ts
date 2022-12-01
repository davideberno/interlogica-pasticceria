import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { api, ApiRoutes } from "api";
import {
  fetchIngredients,
  fetchIngredientsSuccess,
  fetchIngredientsFailed,
  addIngredient,
  addIngredientSuccess,
  addIngredientFailed,
  deleteIngredient,
  deleteIngredientSuccess,
  deleteIngredientFailed,
} from "./ingredientsSlice";
import { Ingredient, IngredientReq } from "types";

function* fetchAllIngredients() {
  try {
    const response: Ingredient[] = yield call(api.getAll, ApiRoutes.Ingredients);
    yield put(fetchIngredientsSuccess(response));
  } catch (error) {
    yield put(fetchIngredientsFailed(error as string));
  }
}

function* addNewIngredient(action: PayloadAction<IngredientReq>) {
  try {
    const response: Ingredient = yield call(api.add, ApiRoutes.Ingredients, action.payload);
    yield put(addIngredientSuccess(response));
  } catch (error) {
    yield put(addIngredientFailed(error as string));
  }
}

function* removeIngredient(action: PayloadAction<string>) {
  try {
    const response: Ingredient = yield call(api.delete, ApiRoutes.Ingredients, action.payload);
    yield put(deleteIngredientSuccess(response));
  } catch (error) {
    yield put(deleteIngredientFailed(error as string));
  }
}

export function* ingredientsSaga() {
  yield takeLatest(fetchIngredients.type, fetchAllIngredients);
  yield takeLatest(addIngredient.type, addNewIngredient);
  yield takeLatest(deleteIngredient.type, removeIngredient);
}
