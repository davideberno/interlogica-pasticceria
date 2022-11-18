import { Schema, model } from "mongoose";

export interface IIngredient {
  name: string;
  unit: "g" | "ml";
}

const ingredientSchema = new Schema<IIngredient>({
  name: { type: String, required: true },
  unit: { type: String, required: true },
});

export const Ingredient = model<IIngredient>("Ingredient", ingredientSchema);
