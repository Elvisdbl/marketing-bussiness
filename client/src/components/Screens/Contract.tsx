import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Plans from "../Plans";
import { getService } from "../../API";
import { Match, IService } from "../../interface/interfaces";
import "../../styles/Contract.scss";

const Contract = ({ match }: Match) => {
  const [service, setService] = useState({} as IService);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const { id_service, title, type, price } = service;

  const onChangeLabel = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDetails(e.target.value);
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        id_service,
        details,
        total_price: price,
      }),
    };
    console.log(config);
    try {
      const res = await fetch("/order", config);
      const result = res.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const requestService = async () => {
      setService(await getService(match.params.id));
    };
    requestService();
  }, [match.params.id]);

  return (
    <div>
      <Navbar />
      <section className="section-bg-2" id="home">
        <div className="section-bg-overlay"></div>
        <div className="col-md-12 text-center">
          <h2 className="section-title text-white">Contract Service</h2>
        </div>
      </section>

      <section className="section-grey no-padding">
        <div className="container-fluid px-0 py-4">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="../images/undraw_Progress_overview_re_tvcl.svg"
                className="d-flex justify-content-center align-items-center"
                style={{ width: "80%", margin: "0 auto" }}
                alt="Happy"
              />
            </div>

            <div className="col-md-6 margin-top-40">
              <div className="small-col-inside">
                <div
                  className="register-form-wrapper wow bounceIn"
                  data-wow-delay="0.5s"
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3>{title}</h3>
                      <p>Fill all the field to contract a new service</p>
                    </div>
                    <div className="text-center">
                      <p>{type}</p>
                      <p className="price-value">{price * 0.01}</p>
                    </div>
                  </div>
                  <div>
                    <form
                      id="register-form"
                      className="register-form register"
                      onSubmit={onFormSubmit}
                    >
                      <input
                        className="register-input name-input white-input"
                        name="name"
                        placeholder="User Name*"
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setName(e.target.value);
                        }}
                      />

                      <input
                        className="register-input name-email white-input"
                        name="email"
                        placeholder="Email Adress*"
                        type="email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setEmail(e.target.value);
                        }}
                      />

                      <textarea
                        className="width-100 mb-2"
                        name="details"
                        placeholder="Details..."
                        rows={6}
                        value={details}
                        onChange={onChangeLabel}
                      ></textarea>

                      <input
                        value="Contract Now"
                        className="register-submit"
                        type="submit"
                      />
                    </form>

                    <p className="register-form-terms">
                      Competitive On Price • Digital +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Plans />
      <Footer />
    </div>
  );
};

export default Contract;
