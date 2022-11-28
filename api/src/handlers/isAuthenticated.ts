import { Request, Response, NextFunction } from "express";

import { IUser } from "../models";

interface User extends IUser {
  _id: string;
}

declare module "express-session" {
  export interface SessionData {
    passport: {
      user: User;
    };
  }
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const user = req.session.passport?.user;
  if (user) {
    res.status(200).json({ id: user._id, ...user });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
};
