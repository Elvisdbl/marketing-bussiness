import { Router } from "express";
import {
  getServices,
  deleteService,
  updateService,
  createService,
  getService,
  getCustomers,
  getCustomer
} from "../controllers/admin.controller";

const router = Router();
//Services
router.get("/getServices", getServices);
router.get("/getService/:id", getService);
router.post("/createService", createService);
router.put("/updateService/:id", updateService);
router.delete("/deleteService/:id", deleteService);

//Customers
router.get("/getCustomers",getCustomers);
router.get("/getCustomer/:id",getCustomer);

// orders


// message


// chats


// plans


// areas


// partners


export default router;
