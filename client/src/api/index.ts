import { get, post, patch, remove } from "./axiosClient";
import { UserReq, User } from "types";

export enum ApiRoutes {
  Login = "/auth/login",
  Logout = "/auth/logout",
  IsAuthenticated = "/auth/isAuthenticated",
  Recipes = "/recipes",
  Sweets = "/sweets",
  Ingredients = "/ingredients",
}

export const api = {
  login: async (user: UserReq) => {
    const response = await post<UserReq, User>(ApiRoutes.Login, user);
    return response;
  },
  logout: async (user: User) => {
    const response = await post<User, User>(ApiRoutes.Logout, user);
    return response;
  },
  isAuthenticated: async () => {
    const response = await get<User>(ApiRoutes.IsAuthenticated);
    return response;
  },
  getAll: async <T>(url: string) => {
    const response = await get<T[]>(url);
    return response;
  },
  add: async <T, R>(url: string, newItem: R) => {
    const response = await post<R, T>(url, newItem);
    return response;
  },
  edit: async <T, R>(url: string, updatedItem: R) => {
    const response = await patch<R, T>(url, updatedItem);
    return response;
  },
  delete: async <R>(url: string, id: string) => {
    const response = await remove<R>(url + `?id=${id}`);
    return response;
  },
};
