import { Request, Response } from "express";

export const getAllSweets = (req: Request, res: Response) => {
  res.send("All sweets");
};
