import { Router } from "express";
import authRoutes from "./auth.js";
import dataform from "./data.js";
import compRoutes from "./component.js";
import subCompRoutes from "./subComponent.js";
import resumeRoutes from "./resume.js";

const router = Router() as Router;
router.use("/auth", authRoutes);
router.use("/dataform", dataform);
router.use("/component", compRoutes);
router.use("/sub-component", subCompRoutes);
router.use("/resume", resumeRoutes);

export default router;
