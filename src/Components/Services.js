import React, { Component } from "react";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div>
       

        {/* services section */}
        <section className="container py-5">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="service-item py-3 pt-3">
                <div className="p-4">
                  {/* <i className="icofont-business-man mb-4"></i> */}
                  <span className="material-symbols-outlined">person</span>

                  <h5>Master Chefs</h5>

                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="service-item py-3 pt-3">
                <div className="p-4">
                  <span className="material-symbols-outlined mb-4">
                    restaurant
                  </span>

                  <h5>Quality Food</h5>

                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="service-item py-3 pt-3">
                <div className="p-4">
                  {/* <i className="icofont-shopping-cart mb-4"></i> */}
                  <span className="material-symbols-outlined mb-4">
                    shopping_cart_checkout
                  </span>

                  <h5>Online Order</h5>

                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <div className="service-item py-3 pt-3">
                <div className="p-4">
                  <span className="material-symbols-outlined mb-4">
                    support_agent
                  </span>

                  <h5>24/7 Service</h5>

                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       


      </div>
    );
  }
}
export default Services;
