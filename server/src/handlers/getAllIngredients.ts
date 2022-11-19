import { Request, Response } from "express";

import { Ingredient } from "../models";

export const getAllIngredients = async (req: Request, res: Response) => {
  try {
    const ingredients = await Ingredient.find({});
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(400).json({ error });
  }
};
