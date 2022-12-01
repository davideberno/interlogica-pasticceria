import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { authReducer, authSaga } from "slices/auth";
import { sweetsReducer, sweetsSaga } from "slices/sweets";
import { ingredientsReducer, ingredientsSaga } from "slices/ingredients";
import { recipesReducer, recipesSaga } from "slices/recipes";

function* RootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(sweetsSaga)]);
  yield all([fork(ingredientsSaga)]);
  yield all([fork(recipesSaga)]);
}
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sweets: sweetsReducer,
    ingredients: ingredientsReducer,
    recipes: recipesReducer,
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
