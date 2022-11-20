import { Request, Response } from "express";

import { Ingredient } from "../models";

export const changeIngredient = async (req: Request, res: Response) => {
  try {
    const { id, name, unit } = req.body;
    const ingredient = await Ingredient.findByIdAndUpdate(id, { name, unit }, { new: true });
    if (!ingredient) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(ingredient);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
