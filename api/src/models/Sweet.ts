import { Schema, model } from "mongoose";

import { IIngredient } from ".";

export interface ISweet {
  name: string;
  price: number;
  ingredients: IIngredient[];
}

const sweetSchema = new Schema<ISweet>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { timestamps: true }
);

export const Sweet = model<ISweet>("Sweet", sweetSchema);
