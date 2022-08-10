import { Router } from "express";
import { userCtrl } from "../controllers";

const router = Router();
router.route("/").get(userCtrl.get);
export default router;
