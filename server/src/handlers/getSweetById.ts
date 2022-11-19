import { Request, Response } from "express";

import { Sweet } from "../models";

export const getSweetById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const sweet = await Sweet.findById(id, null, { populate: "ingredients" });
    res.status(200).json(sweet);
  } catch (error) {
    res.status(400).json({ error });
  }
};
