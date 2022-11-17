import dotenv from "dotenv";
import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";

import { authRoutes, apiRoutes } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database connection
mongoose
  .connect("mongodb://db:27017/interlogica-bakery", { useNewUrlParser: true } as ConnectOptions)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

//Routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`[server]: running on port ${port}...`);
});
