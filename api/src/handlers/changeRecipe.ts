import { Request, Response } from "express";

import { Recipe } from "../models";

export const changeRecipe = async (req: Request, res: Response) => {
  try {
    const { id, name, ingredients } = req.body;
    const recipe = await Recipe.findByIdAndUpdate(id, { name, ingredients }, { new: true });
    if (!recipe) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
