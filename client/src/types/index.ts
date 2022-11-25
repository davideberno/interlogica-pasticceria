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
