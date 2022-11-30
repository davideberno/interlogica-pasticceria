import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { ingredientsApi } from "api";
import {
  fetchIngredients,
  fetchIngredientsSuccess,
  fetchIngredientsFailed,
  addNewIngredient,
  addNewIngredientSuccess,
  addNewIngredientFailed,
} from ".";
import { Ingredient, IngredientReq } from "types";

function* fetchAllIngredients() {
  try {
    const response: Ingredient[] = yield call(ingredientsApi.getAll);
    yield put(fetchIngredientsSuccess(response));
  } catch (error) {
    yield put(fetchIngredientsFailed(error as string));
  }
}

function* addIngredient(action: PayloadAction<IngredientReq>) {
  try {
    const response: Ingredient = yield call(ingredientsApi.addIngredient, action.payload);
    yield put(addNewIngredientSuccess(response));
  } catch (error) {
    yield put(addNewIngredientFailed(error as string));
  }
}

export function* ingredientsSaga() {
  yield takeLatest(fetchIngredients.type, fetchAllIngredients);
  yield takeLatest(addNewIngredient.type, addIngredient);
}
