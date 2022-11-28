import { get } from "./axiosClient";

import { Sweet } from "types";

export const sweetsApi = {
  getAll: async () => {
    const response = await get<Sweet[]>("/sweets");
    return response;
  },
};
