import { get, post, patch, remove } from "./axiosClient";

export const recipesApi = {
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
