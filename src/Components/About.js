import React, { Component } from "react";
import "./About.css";
import { Link } from "react-router-dom";


class About extends Component {
  render() {
    return (
      <div>

        {/* about section */}
        <section className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start" data-aos="zoom-in">
                  <img
                    src="asset/img/about-1.jpg"
                    alt="About-1"
                    className="img-fluid rounded w-100"
                  />
                </div>

                <div
                  className="col-6 text-start"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <img
                    src="asset/img/about-2.jpg"
                    alt="About-2"
                    className="img-fluid rounded w-75"
                    //style="margin-top: 25%;"
                    style={{ marginTop: "25%" }}
                  />
                </div>

                <div className="col-6 text-end" data-aos="zoom-in">
                  <img
                    src="asset/img/about-3.jpg"
                    alt="About-3"
                    className="img-fluid rounded w-75"
                  />
                </div>

                <div
                  className="col-6 text-end"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <img
                    src="asset/img/about-4.jpg"
                    alt="About-4"
                    className="img-fluid rounded w-100"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h5 className="section-about text-start fw-normal">About Us</h5>

              <h2 className="mb-4 section-Welcome">
                Welcome to
                <span className="material-symbols-outlined mb-4">
                  restaurant
                </span>
                Restoran
              </h2>

              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>

              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>

              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-primary border-5 px-3">
                    <h2 className="flex-shrink-0 display-5 mb-0">15</h2>

                    <div className="ps-4">
                      <p className="mb-0">Years of</p>

                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>

                  <Link className="btn btn-read py-3 px-5 mt-4" to>
                    Read More
                  </Link>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-primary border-5 px-3">
                    <h2 className="flex-shrink-0 display-5 mb-0">50</h2>

                    <div className="ps-4">
                      <p className="mb-0">Popular</p>

                      <h6 className="text-uppercase mb-0">MASTER CHEFS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}
export default About;
