import { Request, Response } from "express";

import { Ingredient } from "../models";

export const addNewIngredient = async (req: Request, res: Response) => {
  try {
    const newIngredient = req.body;
    const ingredient = await Ingredient.create(newIngredient);
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(400).json({ error });
  }
};
