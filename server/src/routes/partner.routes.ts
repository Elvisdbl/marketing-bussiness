import { Router } from "express";
import {
  getPartners,
  getPartner,
  createPartner,
  updatePartner,
  deletePartner,
} from "../controllers/partner.controller";

const router = Router();

router.get("/", getPartners);
router.post("/", createPartner);
router.get("/:id", getPartner);
router.put("/:id", updatePartner);
router.delete("/:id", deletePartner);

export default router;
