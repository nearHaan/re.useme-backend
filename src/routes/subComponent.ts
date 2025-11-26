import { Router } from "express";
import { addSubComponent } from "../controllers/subComponent.js";

const router = Router() as Router;

router.post("/create", addSubComponent);

export default router;
