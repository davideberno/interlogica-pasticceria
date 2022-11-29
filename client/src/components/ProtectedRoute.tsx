import React, { FC, ReactNode, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { checkAuth, selectUser } from "slices/auth";
import { LoginPage } from "components";

export interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return <>{user ? children : <LoginPage />}</>;
};
