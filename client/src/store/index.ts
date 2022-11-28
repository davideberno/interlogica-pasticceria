import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { sweetsReducer, sweetsSaga } from "slices/sweets";
import { authReducer, authSaga } from "slices/auth";

function* RootSaga() {
  yield all([fork(sweetsSaga)]);
  yield all([fork(authSaga)]);
}
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    sweets: sweetsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
