import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", { failureRedirect: "/login" }, (err, user) => {
    if (err) {
      res.status(401).json({ error: "Incorrect username/password" });
    }
    if (user) {
      req.login(user, (err) => {
        if (err) {
          next(err);
        } else {
          console.log("Local login succeded");
          res.status(200).json({ id: user._id, email: user.email });
        }
      });
    }
  })(req, res, next);
};
