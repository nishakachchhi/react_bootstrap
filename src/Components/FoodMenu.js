import React, { Component } from "react";
import "./FoodMenu.css";
import { Link } from "react-router-dom";

class FoodMenu extends Component {
  render() {
    return (
      <div>
        <section className="container py-5">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h5 className="section-title text-center text-primary fw-normal">
              Food Menu
            </h5>

            <h2 className="mb-5 h2-Popular">Most Popular Items</h2>
          </div>

          <div
            className=" text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 Popular-active"
                  to="#"
                >
                  {/* <i className="icofont-coffee-mug"></i> */}
                  <span className="material-symbols-outlined">local_cafe</span>

                  <div className="ps-3">
                    <small className="text-body">Popular</small>

                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 "
                  to="#"
                >
                  {/* <i className="icofont-burger"></i> */}
                  <span className="material-symbols-outlined">lunch_dining</span>

                  <div className="ps-3">
                    <small className="text-body">Popular</small>

                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 "
                  to="#"
                >
                  <span className="material-symbols-outlined">restaurant</span>

                  <div className="ps-3">
                    <small className="text-body">Popular</small>

                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </Link>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 item-active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-1.jpg"
                        alt
                        // style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-2.jpg"
                        alt
                        //style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-3.jpg"
                        alt
                        // style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-4.jpg"
                        alt
                        //style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-5.jpg"
                        alt
                        //style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-6.jpg"
                        alt
                        //style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-7.jpg"
                        alt
                        // style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex align-items-center zoom-in">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="asset/img/menu-8.jpg"
                        alt
                        //style="width: 80px;"
                        style={{ width: "80px" }}
                      />

                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>

                          <span className="text-primary">$115</span>
                        </h5>

                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
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
export default FoodMenu;
