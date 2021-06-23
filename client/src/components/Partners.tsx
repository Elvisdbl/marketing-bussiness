import React, { useState, useEffect } from "react";
import { getPartners } from "../API";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const requestPartners = async () => {
      setPartners(await getPartners());
    };
    requestPartners();
  }, []);

  return (
    <>
      {partners ? (
        <section className="section-grey small-padding-top" id="partners">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center padding-bottom-20">
                <h3>Trusted by over 50 great businesses</h3>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-1"></div>
              {partners.map(({ image, name }) => (
                <div className="col-md-2 col-xs-6">
                  <div className="our-partners">
                    <img
                      src={`http://localhost:5000/${image}`}
                      className="width-100"
                      alt={`${name}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Partners;
