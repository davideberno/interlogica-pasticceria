import { Request, Response } from "express";

import { Recipe } from "../models";

export const addNewRecipe = async (req: Request, res: Response) => {
  try {
    const newRecipe = req.body;
    const recipe = await Recipe.create(newRecipe);
    const populatedRecipe = await Recipe.populate(recipe, "ingredients");
    res.status(200).json(populatedRecipe);
  } catch (error) {
    res.status(400).json({ error });
  }
};
