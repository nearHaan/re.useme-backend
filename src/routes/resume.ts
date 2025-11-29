import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";
import { getResumeDetails } from "../controllers/resume.js";

const router = Router() as Router;

router.get("/create", authenticate, getResumeDetails);

export default router;
