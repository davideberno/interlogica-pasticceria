import { Request, Response, NextFunction } from "express";

import { IUser } from "../models";

declare module "express-session" {
  export interface SessionData {
    passport: {
      user: IUser;
    };
  }
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const user = req.session.passport?.user;
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
};
