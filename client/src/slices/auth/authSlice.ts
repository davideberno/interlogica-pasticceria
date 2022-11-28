import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { LoadingErrorData, User, UserReq } from "types";

export interface AuthState {
  user: LoadingErrorData<User>;
}

const initialState: AuthState = {
  user: {
    loading: false,
    data: undefined,
    error: undefined,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserReq>) => {
      state.user.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user.data = action.payload;
      state.user.loading = false;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.user.error = action.payload;
      state.user.loading = false;
    },
    logout: (state, action: PayloadAction<User>) => {
      state.user.loading = true;
    },
    logoutSuccess: (state, action: PayloadAction<User>) => {
      state.user.data = undefined;
      state.user.loading = false;
    },
    logoutFailed: (state, action: PayloadAction<string>) => {
      state.user.error = action.payload;
      state.user.loading = false;
    },
    checkAuth: (state) => {
      state.user.loading = true;
    },
    checkAuthSuccess: (state, action: PayloadAction<User>) => {
      state.user.data = action.payload;
      state.user.loading = false;
    },
    checkAuthFailed: (state, action: PayloadAction<string>) => {
      state.user.error = action.payload;
      state.user.loading = false;
    },
  },
});

//Actions
export const { login, loginSuccess, loginFailed, logout, logoutSuccess, logoutFailed, checkAuth, checkAuthSuccess, checkAuthFailed } =
  authSlice.actions;

//Selectors
export const selectUserLoading = (state: RootState) => state.auth.user.loading;
export const selectUser = (state: RootState) => state.auth.user.data;
export const selectUserError = (state: RootState) => state.auth.user.error;

//Reducer
export const authReducer = authSlice.reducer;
