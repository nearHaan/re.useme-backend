import { Router } from "express";
import authRoutes from "./auth.js";

const router = Router() as Router;
router.use("/auth", authRoutes);

export default router;
