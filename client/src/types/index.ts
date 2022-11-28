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
  id: string;
  email: string;
}

export interface Sweet {
  id: string;
  name: string;
  price: number;
  imgUrl?: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  unit: "g" | "ml";
}
