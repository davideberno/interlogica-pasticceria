import { Request, Response } from "express";

import { Recipe } from "../models";

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find({}, null, { populate: "ingredients" });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json({ error });
  }
};
