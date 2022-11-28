import { call, put, takeLatest } from "redux-saga/effects";

import { sweetsApi } from "api";
import { fetchSweets, fetchSweetsSuccess, fetchSweetsFailed } from ".";
import { Sweet } from "types";

function* fetchAllSweets() {
  try {
    const response: Sweet[] = yield call(sweetsApi.getAll);
    yield put(fetchSweetsSuccess(response));
  } catch (error) {
    yield put(fetchSweetsFailed(error as string));
  }
}

export function* sweetsSaga() {
  yield takeLatest(fetchSweets.type, fetchAllSweets);
}
