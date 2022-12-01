import { Request, Response } from "express";

import { Ingredient } from "../models";

export const deleteIngredient = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const ingredient = await Ingredient.findByIdAndRemove(id);
    if (!ingredient) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(ingredient);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
