import express from "express";

import { login, logout, isAuthenticated } from "../handlers";

const router = express.Router();

router.post("/login", login);

router.post("/logout", logout);

router.get("/isAuthenticated", isAuthenticated);

export { router as authRoutes };
