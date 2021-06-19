import { Request, Response } from "express";

//DB
import { connect } from "../database";

//Interfaces
import { IOrder } from "../interface/interfaces";

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
  const id = req.params.id;
  const conn = await connect();
  const order = await conn.query("SELECT * FROM orders WHERE id_order = ?", [
    id,
  ]);
  res.json(order[0]);
}

export async function createOrder(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newOrder: IOrder = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO orders SET ?", [newOrder]);
  res.json({
    message: "New Order Created",
  });
}

export async function updateOrder(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const updatedService: IOrder = req.body;
  const conn = await connect();
  await conn.query("UPDATE orders SET ? WHERE id_order = ?", [
    updatedService,
    id,
  ]);
  res.json({
    message: "Order has been updated",
  });
}

export async function deleteOrder(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM orders WHERE id_order = ?", [id]);
  res.json({
    message: "Order has been deleted",
  });
}

// fine