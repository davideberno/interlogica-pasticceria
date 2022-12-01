import { Request, Response } from "express";

import { Sweet } from "../models";

export const addNewSweet = async (req: Request, res: Response) => {
  try {
    const newSweet = req.body;
    const sweet = await Sweet.create(newSweet);
    const populatedSweet = await Sweet.populate(sweet, { path: "recipe", populate: { path: "ingredients" } });
    res.status(200).json(populatedSweet);
  } catch (error) {
    res.status(400).json({ error });
  }
};
