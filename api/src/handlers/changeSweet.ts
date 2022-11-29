import { Request, Response } from "express";

import { Sweet } from "../models";

export const changeSweet = async (req: Request, res: Response) => {
  try {
    const { id, name, price, quantity } = req.body;
    const sweet = await Sweet.findByIdAndUpdate(id, { name, price, quantity }, { new: true });
    if (!sweet) {
      res.status(404).json({ error: "Not found" });
    } else {
      res.status(200).json(sweet);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};
