import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { sweetsReducer, sweetsSaga } from "features/sweets";

function* RootSaga() {
  yield all([fork(sweetsSaga)]);
}
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    sweets: sweetsReducer,
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
