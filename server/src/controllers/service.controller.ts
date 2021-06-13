import { Request, Response } from "express";
//DB

import { connect } from "../database";

//Interfaces
import { Service } from "../interface/interfaces";

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

export async function getService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  const service = await conn.query(
    "SELECT * FROM services WHERE id_service = ?",
    [id]
  );
  res.json(service[0]);
}

export async function createService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newService: Service = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO services SET ?", [newService]);
  res.json({
    message: "New Service Created",
  });
}

export async function updateService(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const updatedService: Service = req.body;
  console.log(updateService);
  const conn = await connect();
  await conn.query("UPDATE services SET ? WHERE id_service = ?", [
    updatedService,
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

// Fine