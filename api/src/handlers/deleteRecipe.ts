import { Request, Response } from "express";

import { Recipe } from "../models";

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const recipe = await Recipe.findOneAndRemove(id);
    if (!recipe) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
