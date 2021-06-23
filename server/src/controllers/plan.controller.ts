import { Request, Response } from "express";

//DB
import { connect } from "../database";

//Interfaces
import { IPlan } from "../interface/interfaces";

// plans

export async function getPlans(
  req: Request,
  res: Response
): Promise<Response | void> {
  try {

    const conn = await connect();
    const plan = await conn.query("SELECT * FROM plans");
    const details = await  conn.query("SELECT * FROM plan_details");
    
    const resultPlan = JSON.parse(JSON.stringify(plan[0]));
    const resultDetails = JSON.parse(JSON.stringify(details[0]));

    let plans = [];

    if(resultPlan && resultDetails){
      resultPlan.forEach(item => {

        const detail = [];

        plans.push({
          id_plan: item.id_plan,
          type: item.type,
          price: item.price,
          details: detail
        });

        resultDetails.forEach(item2 => {
          if(item.id_plan === item2.id_plan){
          detail.push({
            id_detail: item2.id_detail,
            id_plan: item2.id_plan,
            name: item2.name
          });
          }
        });
      });
    }

    return res.status(200).json(plans);  

  } catch (e) {
    console.log(e);
  }
}

export async function getPlan(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  const plan = await conn.query("SELECT * FROM plans WHERE id_plan = ?", [
    id,
  ]);
  res.json(plan[0]);
}

export async function createPlan(
  req: Request,
  res: Response
): Promise<Response | void> {
  const newPlan: IPlan = req.body;
  const conn = await connect();
  await conn.query("INSERT INTO plans SET ?", [newPlan]);
  res.json({
    message: "New Plan Created",
  });
}

export async function updatePlan(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const updatedPlan: IPlan = req.body;
  const conn = await connect();
  await conn.query("UPDATE plans SET ? WHERE id_plan = ?", [updatedPlan, id]);
  res.json({
    message: "Plan has been updated",
  });
}

export async function deletePlan(
  req: Request,
  res: Response
): Promise<Response | void> {
  const id = req.params.id;
  const conn = await connect();
  await conn.query("DELETE FROM plans WHERE id_plan = ?", [id]);
  res.json({
    message: "Plan has been deleted",
  });
}