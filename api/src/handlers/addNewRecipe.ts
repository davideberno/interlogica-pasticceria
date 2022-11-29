import { Request, Response } from "express";

import { Recipe } from "../models";

export const addNewRecipe = async (req: Request, res: Response) => {
  try {
    const newRecipe = req.body;
    const recipe = await Recipe.create(newRecipe);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error });
  }
};
