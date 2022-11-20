import { Request, Response } from "express";

import { Sweet } from "../models";

export const deleteSweet = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const sweet = await Sweet.findOneAndRemove(id);
    if (!sweet) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(sweet);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
