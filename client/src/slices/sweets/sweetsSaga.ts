import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { api, ApiRoutes } from "api";
import {
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
} from "./sweetsSlice";
import { Sweet, SweetReq } from "types";

function* fetchAllSweets() {
  try {
    const response: Sweet[] = yield call(api.getAll, ApiRoutes.Sweets);
    yield put(fetchSweetsSuccess(response));
  } catch (error) {
    yield put(fetchSweetsFailed(error as string));
  }
}

function* addNewSweet(action: PayloadAction<SweetReq>) {
  try {
    const response: Sweet = yield call(api.add, ApiRoutes.Sweets, action.payload);
    yield put(addSweetSuccess(response));
  } catch (error) {
    yield put(addSweetFailed(error as string));
  }
}

function* modifySweet(action: PayloadAction<SweetReq>) {
  try {
    const response: Sweet = yield call(api.edit, ApiRoutes.Sweets, action.payload);
    yield put(editSweetSuccess(response));
  } catch (error) {
    yield put(editSweetFailed(error as string));
  }
}

function* removeSweet(action: PayloadAction<string>) {
  try {
    const response: Sweet = yield call(api.delete, ApiRoutes.Sweets, action.payload);
    yield put(deleteSweetSuccess(response));
  } catch (error) {
    yield put(deleteSweetFailed(error as string));
  }
}

export function* sweetsSaga() {
  yield takeLatest(fetchSweets.type, fetchAllSweets);
  yield takeLatest(addSweet.type, addNewSweet);
  yield takeLatest(editSweet.type, modifySweet);
  yield takeLatest(deleteSweet.type, removeSweet);
}
