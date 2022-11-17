import { Request, Response } from "express";

export const changeSweet = (req: Request, res: Response) => {
  const body = req.body;
  res.json(body);
};
