import { Router } from "express";
import {
  getServices,
  deleteService,
  updateService,
  createService,
  getService,
  getPlansByService,
} from "../controllers/service.controller";
import multer from "../config/multer";

const router = Router();

router.get("/", getServices);
router.post("/", multer.single("image"), createService);
router.get("/:id", getService);
router.put("/:id", multer.single("image"), updateService);
router.delete("/:id", deleteService);
router.get("/:id/plans", getPlansByService);

export default router;
