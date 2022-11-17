import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  const body = req.body;
  res.send(body);
};
