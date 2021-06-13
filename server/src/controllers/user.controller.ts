import { Request, Response } from "express";

//DB
import { connect } from "../database";

//Interfaces
import { User } from "../interface/interfaces";

// Users

export async function getUsers(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM Users");
    return res.status(200).json(services[0]);
  } catch (e) {
    console.log(e);
  }
}

export async function getUser(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  console.log(id);
  const conn = await connect();
  const user = await conn.query(
    "SELECT * FROM Users WHERE id_user = ?",
    [id]
  );
  res.json(user[0]);
}

export async function createUser(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newCustomer: User = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO Users SET ?", [newCustomer]);
  res.json({
    message: "New User Created",
  });
}

export async function updateUser(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const updatedCustomer: User = req.body;
  const conn = await connect();
  await conn.query("UPDATE Users SET ? WHERE id_user = ?", [
    updatedCustomer,
    id,
  ]);
  res.json({
    message: "User has been updated",
  });
}

export async function deleteUser(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM Users WHERE id_user = ?", [id]);
  res.json({
    message: "User has been deleted",
  });
}

//Fine