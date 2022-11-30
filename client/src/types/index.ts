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
  name: string;
  price: number;
  imgUrl?: string;
  ingredients: Ingredient[];
}

export interface Sweet extends SweetReq {
  _id: string;
}

export interface RecipeReq {
  name: string;
  ingredients: Ingredient[];
}

export interface Recipe extends RecipeReq {
  _id: string;
}

export interface IngredientReq {
  name: string;
  unit: "g" | "ml";
}

export interface Ingredient extends IngredientReq {
  _id: string;
}
