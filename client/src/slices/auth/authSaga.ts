import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { api } from "api";
import { login, loginSuccess, loginFailed, logout, logoutSuccess, logoutFailed, checkAuth, checkAuthSuccess, checkAuthFailed } from ".";
import { User, UserReq } from "types";

function* userLogin(action: PayloadAction<UserReq>) {
  try {
    const response: User = yield call(api.login, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailed(error as string));
  }
}

function* userLogout(action: PayloadAction<User>) {
  try {
    const response: User = yield call(api.logout, action.payload);
    yield put(logoutSuccess(response));
  } catch (error) {
    yield put(logoutFailed(error as string));
  }
}

function* isUserAuthenticated() {
  try {
    const response: User = yield call(api.isAuthenticated);
    yield put(checkAuthSuccess(response));
  } catch (error) {
    yield put(checkAuthFailed(error as string));
  }
}

export function* authSaga() {
  yield takeLatest(login.type, userLogin);
  yield takeLatest(logout.type, userLogout);
  yield takeLatest(checkAuth.type, isUserAuthenticated);
}
