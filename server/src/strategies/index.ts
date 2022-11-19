import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";

import { User } from "../models";

export const localStartegy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(true);
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return done(true);
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);
