import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Plans from "../Plans";
import Partners from "../Partners";
import { getService } from "../../API";
import { IService,Match } from "../../interface/interfaces";
import Navbar from "../Navbar";
import Footer from "../Footer";


const Details = ({ match }: Match) => {
  const [service, setService] = useState({} as IService);
  const { id_service, title, image, type, description, price } = service;

  useEffect(() => {
    const requestService = async () => {
      setService(await getService(match.params.id));
    };
    requestService();
  }, [match.params.id]);

  return (
    <>
      <Navbar />
      <section key={id_service} className="section-bg-2" id="home">
        <div className="section-bg-overlay"></div>
      </section>
      <div className="section-grey">
        <div className="container" id="service">
          <div className="row">
            <div className="col-md-6 padding-top-80">
              <h3>{title}</h3>
              <ul className="benefits">
                <li>
                  <i className="fas fa-check"></i>
                  {description}
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  {type}
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  {price}
                </li>
              </ul>
              <Link
                to={`/contract/${id_service}`}
                className="btn-green small scrool"
              >
                Contract
              </Link>
            </div>

            <div className="col-md-6 padding-top-80">
              <img
                src={`http://localhost:5000/${image}`}
                className="width-100 margin-right-15 box-shadow"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
      <Plans />
      <Partners />
      <Footer />
    </>
  );
};
export default Details;
