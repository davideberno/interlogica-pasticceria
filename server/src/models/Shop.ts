import { Schema, model } from "mongoose";

import { ISweet } from "./";

export interface IShop {
  sweets: ISweet[];
}

const shopSchema = new Schema<IShop>({
  sweets: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
});

export const Shop = model<IShop>("Shop", shopSchema);
