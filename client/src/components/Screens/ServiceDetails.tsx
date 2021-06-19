import React, { useState, useEffect } from "react";
import { getService, getPlansByService } from "../../API";

type Match = {
  match: {
    params: {
      id: number;
    };
  };
};

interface IService {
  id_service: number;
  title: string;
  type: string;
  description: string;
  price: number;
  details: string;
}

interface IPlans {
  id_plan: number;
  id_service: number;
  name: string;
  description: string;
}

const Details = ({ match }: Match) => {
  const [service, setService] = useState({} as IService);
  const [plans, setPlans] = useState([] as Array<IPlans>);

  const { id_service, title, type, description, price, details } = service;

  useEffect(() => {
    const requestService = async () => {
      setService(await getService(match.params.id));
    };
    requestService();

    const requestPlansByService = async () => {
      setPlans(await getPlansByService(id_service));
    };
    requestPlansByService();
  }, [id_service, match.params.id]);

  return (
    <>
      <section className="home-section" id="home">
        <div className="home-section-overlay"></div>

        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center"
              style={{ position: "relative" }}
            >
              <h1>We are a digital marketing agency</h1>

              <p className="hero-text">
                We solve your digital marketing problems all over the country.
              </p>

              <a href="#services" className="btn-green scrool">
                Explore Our Services
              </a>
              <br />

              <a href="#services" className="arrow-down scrool">
                <i className="pe-7s-angle-down-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>

    // <div>
    //   <div>
    //     <h1>{title}</h1>
    //     <p>{type}</p>
    //     <p>{description}</p>
    //     <p>{price}</p>
    //     <p>{details}</p>
    //   </div>

    //   <h1>Plans</h1>

    //   {plans
    //     ? plans.map(({ name, description }) => {
    //         return (
    //           <div>
    //             <p>{name}</p>
    //             <p>{description}</p>
    //           </div>
    //         );
    //       })
    //     : "loading..."}
    // </div>
  );
};
export default Details;
