import { Request, Response } from "express";

import { Recipe } from "../models";

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findById(id, null, { populate: "ingredients" });
    if (!recipe) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
