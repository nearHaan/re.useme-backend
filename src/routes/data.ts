import { Router } from "express";
import { getTemplateAndDetails } from "../controllers/data.js";
import { authenticate } from "../middlewares/auth.js";
import { updateUserDetails } from "../controllers/userDetails.js";

const router = Router() as Router;

router.get("/", authenticate, getTemplateAndDetails);
router.post("/update-user-data", authenticate, updateUserDetails);

export default router;
