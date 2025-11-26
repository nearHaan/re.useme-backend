import { Router } from "express";
import { getDataTemplate } from "../controllers/data.js";

const router = Router() as Router;

router.get("/", getDataTemplate);

export default router;
