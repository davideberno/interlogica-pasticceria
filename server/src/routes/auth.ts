import express from "express";

import { login, logout } from "../handlers";

const router = express.Router();

router.post("login", login);

router.post("logout", logout);

export { router as authRoutes };
