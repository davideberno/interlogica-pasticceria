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
  getAllRecipes,
  getRecipeById,
  addNewRecipe,
  changeRecipe,
  deleteRecipe,
} from "../handlers";

const router = express.Router();

router.get("/sweets", getAllSweets);

router.get("/sweets/:id", getSweetById);

router.post("/sweets", addNewSweet);

router.patch("/sweets", changeSweet);

router.delete("/sweets", deleteSweet);

router.get("/recipes", getAllRecipes);

router.get("/recipes/:id", getRecipeById);

router.post("/recipes", addNewRecipe);

router.patch("/recipes", changeRecipe);

router.delete("/recipes", deleteRecipe);

router.get("/ingredients", getAllIngredients);

router.get("/ingredients/:id", getIngredientById);

router.post("/ingredients", addNewIngredient);

router.patch("/ingredients", changeIngredient);

router.delete("/ingredients", deleteIngredient);

export { router as apiRoutes };
