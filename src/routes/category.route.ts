import { Router } from "express";
import { categoryCtrl } from "../controllers";

const router = Router();

router.route("/").get(categoryCtrl.get).post(categoryCtrl.post);
router
  .route("/:id")
  .get(categoryCtrl.getById)
  .put(categoryCtrl.put)
  .delete(categoryCtrl.delete);
export default router;
