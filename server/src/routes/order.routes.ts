import { Router } from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controllers";

const router = Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:id", getOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
