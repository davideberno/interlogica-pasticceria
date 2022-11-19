import dotenv from "dotenv";
import express, { Express } from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import mongoose, { ConnectOptions } from "mongoose";
import passport from "passport";
import MongoStore from "connect-mongo";

import { errorHandler } from "./handlers";
import { authRoutes, apiRoutes } from "./routes";
import { localStartegy } from "./strategies";

//Env
dotenv.config();

//Database connection
const uri = "mongodb://db:27017/interlogica-bakery";

mongoose
  .connect(uri, { useNewUrlParser: true } as ConnectOptions)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app: Express = express();

//Parsers
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

//Session
app.use(
  session({
    secret: "interlogica-bakery",
    resave: false,
    unset: "destroy",
    store: MongoStore.create({ mongoUrl: uri }),
  })
);

//Passport
app.use(passport.initialize());

passport.use(localStartegy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id: string, done) => {
  done(null);
});

//Routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

//Error handler
app.use(errorHandler);

//Server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`[server]: running on port ${port}...`);
});

console.log(new mongoose.Types.ObjectId());
