import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Team.css";

class Team extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid py-5 px-0">
          <div className="container">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h5 className="section-title text-center text-primary fw-normal">
                Team Members
              </h5>

              <h2 className="mb-5 h2-Popular">Our Master Chefs</h2>
            </div>

            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 zoom-in"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="asset/img/team-1.jpg" alt />
                  </div>

                  <h5 className="mb-0">Full Name</h5>

                  <small>Designation</small>

                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-facebook"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-twitter"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 zoom-in"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="asset/img/team-2.jpg" alt />
                  </div>

                  <h5 className="mb-0">Full Name</h5>

                  <small>Designation</small>

                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-facebook"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-twitter"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 zoom-in"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="asset/img/team-3.jpg" alt />
                  </div>

                  <h5 className="mb-0">Full Name</h5>

                  <small>Designation</small>

                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-facebook"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-twitter"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 zoom-in"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src="asset/img/team-4.jpg" alt />
                  </div>

                  <h5 className="mb-0">Full Name</h5>

                  <small>Designation</small>

                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-facebook"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-twitter"></i>
                    </Link>

                    <Link className="btn btn-square btn-primary mx-1" to>
                      <i className="icofont-instagram"></i>
                    </Link>
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
export default Team;
