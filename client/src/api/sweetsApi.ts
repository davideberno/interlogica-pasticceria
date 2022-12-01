import { get, post } from "./axiosClient";

import { Sweet, SweetReq } from "types";

export const sweetsApi = {
  getAll: async () => {
    const response = await get<Sweet[]>("/sweets");
    return response;
  },
  addSweet: async (newSweet: SweetReq) => {
    const response = await post<SweetReq, Sweet>("/sweets", newSweet);
    return response;
  },
};
