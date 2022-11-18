import { Request, Response } from "express";
import { Sweet } from "../models";

export const addNewSweet = (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newSweet = Sweet.create({ name, price });
  res.send(newSweet);
};
