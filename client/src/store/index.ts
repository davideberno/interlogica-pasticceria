import { configureStore } from "@reduxjs/toolkit";

import sweetsReducer from "features/sweets/sweetsSlice";

export const store = configureStore({
  reducer: {
    sweets: sweetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
