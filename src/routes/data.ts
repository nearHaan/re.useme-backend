import { Router } from "express";
import { getDataTemplate } from "../controllers/data.js";
import { authenticate } from "../middlewares/auth.js";

const router = Router() as Router;

router.get("/", authenticate, getDataTemplate);

export default router;
