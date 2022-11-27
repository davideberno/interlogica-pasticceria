import { get } from "./axiosClient";

export const sweetsApi = {
  getAll: async () => {
    const response = await get("/sweets");
    return response;
  },
};
