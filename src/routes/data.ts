import { Router } from "express";
import { getDataTemplate } from "../controllers/data.js";
import { authenticate } from "../middlewares/auth.js";
import { updateUserDetails } from "../controllers/userDetails.js";

const router = Router() as Router;

router.get("/", authenticate, getDataTemplate);
router.post("/update-user-data", authenticate, updateUserDetails);

export default router;
