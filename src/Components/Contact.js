import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
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
                Contact Us
              </h5>

              <h2 className="mb-5 h2-Popular">Contact For Any Query</h2>
            </div>

            <div className="row g-4">
              <div
                className="col-12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="row gy-4">
                  <div className="col-md-4">
                    <h5 className="section fw-normal text-start text-primary">
                      Booking
                    </h5>

                    <p>
                      <i className="icofont-envelope-open"></i>
                      book@example.com
                    </p>
                  </div>

                  <div className="col-md-4">
                    <h5 className="section fw-normal text-start text-primary">
                      General
                    </h5>

                    <p>
                      <i className="icofont-envelope-open"></i>
                      info@example.com
                    </p>
                  </div>

                  <div className="col-md-4">
                    <h5 className="section fw-normal text-start text-primary">
                      Technical
                    </h5>

                    <p>
                      <i className="icofont-envelope-open"></i>
                      tech@example.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 wow fadeIn" style={{visibility:"visible"}}>
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.63727066302!2d72.68220603438253!3d21.159462707430492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1673872710529!5m2!1sen!2sin"
                  width="550"
                  height="370"
                  //style="border:0;"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                ></iframe>
              </div>

              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div
                  className="wow fadeInUp"
                  data-wow-delay="0.2s"
                  //style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
                  style={{visibility:"visible",animationDelay:"0.2s",animationName:"fadeInUp"}}
                >
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

                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label for="subject">Subject</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            //style="height: 150px"
                            style={{ height: "150px" }}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
