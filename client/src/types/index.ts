export interface LoadingErrorData<T> {
  loading: boolean;
  data: T | undefined;
  error: string | undefined;
}

export interface UserReq {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface User {
  _id: string;
  email: string;
}

export interface SweetReq {
  recipe: string;
  price: number;
  quantity: number;
}

export interface Sweet {
  _id: string;
  recipe: Recipe;
  price: number;
  quantity: number;
}

export interface RecipeReq {
  name: string;
  ingredients: string[];
}

export interface Recipe {
  _id: string;
  name: string;
  ingredients: Ingredient[];
}

export type Unit = "g" | "ml";

export interface IngredientReq {
  name: string;
  unit: Unit;
}

export interface Ingredient extends IngredientReq {
  _id: string;
}

export interface ListProps {
  gridArea?: string;
}
