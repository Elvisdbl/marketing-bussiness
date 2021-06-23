import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPlans } from "../API";
import { IPlan } from "../interface/interfaces";
import "../styles/Plans.scss";

const Plans = () => {
  const [plans, setPlans] = useState([] as Array<IPlan>);

  useEffect(() => {
    const requestPlans = async () => {
      setPlans(await getPlans());
    };
    requestPlans();
  }, []);

  return (
    <section className="section-white" id="plans">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center padding-bottom-40">
            <h2>Our Plans for every business</h2>
          </div>

          {plans.map(({ id_plan, type, price, details }) => {
            return (
              <div key={id_plan} className="col-md-4">
                <div className="price-box">
                  <ul className="pricing-list">
                    <li className="price-title">{type}</li>

                    <li className="price-value">{price}</li>

                    <li className="price-subtitle">Per Month</li>
                    {details.map(({ name }) => {
                      return (
                        <li className="price-text">
                          <i className="fas fa-check green"></i>
                          {name}
                        </li>
                      );
                    })}
                    <li className="price-tag-line">
                      <a href="/">Choose Plan</a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
