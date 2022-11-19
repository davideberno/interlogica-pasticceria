import { Request, Response } from "express";

import { Sweet } from "../models";

export const getAllSweets = async (req: Request, res: Response) => {
  try {
    const sweets = await Sweet.find({}, null, { populate: "ingredients" });
    res.status(200).json(sweets);
  } catch (error) {
    res.status(400).json({ error });
  }
};
