import { Schema, model } from "mongoose";

import { IIngredient } from ".";

export interface IRecipe {
  name: string;
  ingredients: IIngredient[];
}

const recipeSchema = new Schema<IRecipe>(
  {
    name: { type: String, required: true },
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);

export const Recipe = model<IRecipe>("Recipe", recipeSchema);
