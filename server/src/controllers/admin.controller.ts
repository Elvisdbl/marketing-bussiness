import { Request, Response } from "express";
//DB

import { connect } from "../database";

//Interfaces
import {
  Service,
  // Customer,
  // Area,
  // Chat,
  // Message,
  // Order,
  // Partner,
  // Plan,
} from "../interface/interfaces";

//Services

export async function getServices(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM services");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function createService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newService: Service = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO services Set ?", [newService]);
  res.json({
    message: "New Service Created",
  });
}

export async function getService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.postId;
  const conn = await connect();
  const service = await conn.query(
    "SELECT * FROM services WHERE id_service = ?",
    [id]
  );
  res.json(service[0]);
}

export async function updateService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const updateService: Service = req.body;
  console.log(updateService);
  const conn = await connect();
  await conn.query("UPDATE services SET ? WHERE id_service = ?", [
    updateService,
    id,
  ]);
  res.json({
    message: "Service has been updated",
  });
}

export async function deleteService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM services WHERE id_service = ?", [id]);
  res.json({
    message: "Service has been deleted",
  });
}

// Customers

export async function getCustomers(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM customers");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getCustomer(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.postId;
  const conn = await connect();
  const service = await conn.query(
    "SELECT * FROM customers WHERE id_user = ?",
    [id]
  );
  res.json(service[0]);
}

// orders

export async function getOrders(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM orders");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getOrder(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.postId;
  const conn = await connect();
  const service = await conn.query("SELECT * FROM orders WHERE id_order = ?", [
    id,
  ]);
  res.json(service[0]);
}

// plans

export async function getPlans(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM plans");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getPlan(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.postId;
  const conn = await connect();
  const service = await conn.query("SELECT * FROM plans WHERE id_plan = ?", [
    id,
  ]);
  res.json(service[0]);
}

// areas

export async function getAreas(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM areas");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getArea(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.postId;
  const conn = await connect();
  const service = await conn.query("SELECT * FROM areas WHERE id_area = ?", [
    id,
  ]);
  res.json(service[0]);
}

// partners

export async function getPartners(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM partners");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getPartner(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.postId;
  const conn = await connect();
  const service = await conn.query(
    "SELECT * FROM partners WHERE id_partner = ?",
    [id]
  );
  res.json(service[0]);
}

// message

// chats
