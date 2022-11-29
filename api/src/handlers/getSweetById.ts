import { Request, Response } from "express";

import { Sweet } from "../models";

export const getSweetById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const sweet = await Sweet.findById(id, null, { populate: "recipe" });
    if (!sweet) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(sweet);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
