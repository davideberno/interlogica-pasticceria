import { Request, Response } from "express";

export const getSweetById = (req: Request, res: Response) => {
  const id = req.params.id;
  res.send("Id: " + id);
};
