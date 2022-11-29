import { Schema, model } from "mongoose";

import { IIngredient, IRecipe } from ".";

export interface ISweet {
  recipe: IRecipe;
  price: number;
  quantity: number;
}

const sweetSchema = new Schema<ISweet>(
  {
    recipe: { type: Schema.Types.ObjectId, ref: "Recipe" },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Sweet = model<ISweet>("Sweet", sweetSchema);
