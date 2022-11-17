import express from "express";

import { getAllSweets, getSweetById, addNewSweet, changeSweet, deleteSweet } from "../handlers";

const router = express.Router();

router.get("/sweets", getAllSweets);

router.get("/sweets/:id", getSweetById);

router.post("/sweets", addNewSweet);

router.patch("/sweets", changeSweet);

router.delete("/sweets", deleteSweet);

export { router as apiRoutes };
