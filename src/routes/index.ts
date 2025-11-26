import { Router } from "express";
import authRoutes from "./auth.js";
import dataform from "./data.js";
import compRoutes from "./component.js";

const router = Router() as Router;
router.use("/auth", authRoutes);
router.use("/dataform", dataform);
router.use("/component", compRoutes);

export default router;
