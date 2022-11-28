import { get, post } from "./axiosClient";

import { UserReq, User } from "types";

export const authApi = {
  login: async (user: UserReq) => {
    const response = await post<UserReq, User>("/auth/login", user);
    return response;
  },
  logout: async (user: User) => {
    const response = await post<User, User>("/auth/logout", user);
    return response;
  },
  isAuthenticated: async () => {
    const response = await get<User>("/auth/isAuthenticated");
    return response;
  },
};
