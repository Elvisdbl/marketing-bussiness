import { Router } from "express";
import {
  getServices,
  deleteService,
  updateService,
  createService,
  getService,
} from "../controllers/service.controller";

const router = Router();

router.get("/", getServices);
router.post("/", createService);
router.get("/:id", getService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
