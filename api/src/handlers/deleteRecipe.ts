import { Request, Response } from "express";

import { Recipe } from "../models";

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    console.log(req.query);

    const { id } = req.query;
    const recipe = await Recipe.findByIdAndRemove(id).populate("ingredients");
    if (!recipe) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(recipe);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
