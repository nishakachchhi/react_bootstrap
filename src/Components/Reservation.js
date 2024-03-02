import React, { Component } from "react";
import "./Reservation.css"

class Reservation extends Component {
  render() {
    return (
      <div>
        <section
          className="container-fluid py-5 px-0"
          //style="visibility: visible;"
          style={{visibility:"visible"}}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="video">
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=XCpASnIrfWY&list=PLdPwRNmUlk0ka9Woqt3Xz4YKr5Fy5wjQT"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>

            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div
                className="p-5"
                data-wow-delay="0.2s"
               // style="visibility: visible;"
               style={{visibility:"visible"}}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h5 className="section-reservation text-start text-primary fw-normal">
                  Reservation
                </h5>

                <h2 className="text-white mb-4">Book A Table Online</h2>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />

                        <label for="name">Your Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />

                        <label for="email">Your Email</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div
                        className="form-floating date"
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          id="datetime"
                          placeholder="Date &amp; Time"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                        />

                        <label for="datetime">Date &amp; Time</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select1">
                          <option value="1">People 1</option>
                          <option value="2">People 2</option>
                          <option value="3">People 3</option>
                        </select>

                        <label for="select1">No Of People</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Special Request"
                          id="message"
                          //style="height: 100px"
                          style={{height:"100px"}}
                        ></textarea>

                        <label for="message">Special Request</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-read w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Reservation;
