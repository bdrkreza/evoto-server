import { Router } from "express";
import { productCtrl } from "../controllers";

const router = Router();
router.route("/").get(productCtrl.get);
export default router;
