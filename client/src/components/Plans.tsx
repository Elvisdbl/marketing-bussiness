import React from "react";
import "../styles/Plans.scss";

const Plans = () => {
  return (
    <section className="section-white" id="plans">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center padding-bottom-40">
            <h2>Our Plans for every business</h2>
          </div>

          <div className="col-md-4">
            <div className="price-box">
              <ul className="pricing-list">
                <li className="price-title">BASIC</li>

                <li className="price-value">$25</li>

                <li className="price-subtitle">Per Month</li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>Custom Charts
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>5 Mailboxes,
                  10 Gb Storage
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>Unlimited Free
                  Dashboards
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>Access to all
                  APIs
                </li>

                <li className="price-tag-line">
                  <a href="#">FREE 15-DAY TRIAL</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="price-box">
              <div className="ribbon blue">
                <span>Popular</span>
              </div>

              <ul className="pricing-list">
                <li className="price-title">STANDARD</li>

                <li className="price-value">$99</li>

                <li className="price-subtitle">Per Month</li>

                <li className="price-text strong">
                  <i className="bi bi-check-circle-fill blue"></i>
                  <strong>All Basic features</strong>
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>15 Mailboxes,
                  50 Gb Storage
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>Interactive
                  Screen Sharing
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>Full Reports
                  History
                </li>

                <li className="price-tag">
                  <a href="#">FREE 15-DAY TRIAL</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="price-box">
              <ul className="pricing-list">
                <li className="price-title white-text">PRO</li>

                <li className="price-value white-text">$199</li>

                <li className="price-subtitle white-text">Per Month</li>

                <li className="price-text white-text">
                  <i className="bi bi-check-circle-fill blue"></i>
                  <strong>All Standard Features</strong>
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>50 Mailboxes,
                  90 Gb Storage
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>Dedicated
                  Account Manager
                </li>

                <li className="price-text">
                  <i className="bi bi-check-circle-fill blue"></i>24/7 Priority
                  Support
                </li>

                <li className="price-tag-line">
                  <a href="#">FREE 15-DAY TRIAL</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
