import { get, post } from "./axiosClient";

import { Ingredient, IngredientReq } from "types";

export const ingredientsApi = {
  getAll: async () => {
    const response = await get<Ingredient[]>("/ingredients");
    return response;
  },
  addIngredient: async (newIngredient: IngredientReq) => {
    const response = await post<IngredientReq, Ingredient>("/ingredients", newIngredient);
    return response;
  },
};
