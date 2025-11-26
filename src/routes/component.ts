import { Router } from "express";
import { addComponent } from "../controllers/component.js";

const router = Router() as Router;

router.post("/create", addComponent);

export default router;
