import { Request, Response, NextFunction } from "express";

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.session.destroy((err) => {
      next(err);
    });
    res.status(200).json({});
  });
};
