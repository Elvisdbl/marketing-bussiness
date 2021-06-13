import { Request, Response } from "express";

//DB
import { connect } from "../database";

//Interfaces
import {
  Partner,
} from "../interface/interfaces";

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
  const id = req.params.id;
  const conn = await connect();
  const service = await conn.query(
    "SELECT * FROM partners WHERE id_partner = ?",
    [id]
  );
  res.json(service[0]);
}

export async function createPartner(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newPartner: Partner = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO partners SET ?", [newPartner]);
  res.json({
    message: "New Partner Created",
  });
}

export async function updatePartner(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const updatedPartner: Partner = req.body;
  const conn = await connect();
  await conn.query("UPDATE partners SET ? WHERE id_partner = ?", [
    updatedPartner,
    id,
  ]);
  res.json({
    message: "Partner has been updated",
  });
}

export async function deletePartner(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM partners WHERE id_partner = ?", [id]);
  res.json({
    message: "Partner has been deleted",
  });
}
 
// Fine