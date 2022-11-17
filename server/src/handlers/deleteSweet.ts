import { Request, Response } from "express";

export const deleteSweet = (req: Request, res: Response) => {
  const body = req.body;
  res.json(body);
};
