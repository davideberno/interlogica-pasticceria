import express from "express";

import {
  getAllSweets,
  getSweetById,
  addNewSweet,
  changeSweet,
  deleteSweet,
  getAllIngredients,
  getIngredientById,
  addNewIngredient,
  changeIngredient,
  deleteIngredient,
} from "../handlers";

const router = express.Router();

router.get("/sweets", getAllSweets);

router.get("/sweets/:id", getSweetById);

router.post("/sweets", addNewSweet);

router.patch("/sweets", changeSweet);

router.delete("/sweets", deleteSweet);

router.get("/ingredients", getAllIngredients);

router.get("/ingredients/:id", getIngredientById);

router.post("/ingredients", addNewIngredient);

router.patch("/ingredients", changeIngredient);

router.delete("/ingredients", deleteIngredient);

export { router as apiRoutes };
