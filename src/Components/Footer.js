import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="container-fluid bg-dark pt-5 mt-5 text-light">
          <div class="container py-5">
            <div class="row g-5">
              <div class="col-lg-3 col-md-6">
                <div>
                  <h4 class="section-reservation text-start text-primary fw-normal mb-4">
                    Restoran
                  </h4>
                </div>

                <a class="btn btn-link f-resto" href="">
                  <i class="icofont-rounded-right"></i>
                  About Us
                </a>

                <a class="btn btn-link f-resto" href="">
                  <i class="icofont-rounded-right"></i>
                  Contact Us
                </a>

                <a class="btn btn-link f-resto" href="">
                  <i class="icofont-rounded-right"></i>
                  Reservation
                </a>

                <a class="btn btn-link f-resto" href="">
                  <i class="icofont-rounded-right"></i>
                  Privacy Policy
                </a>

                <a class="btn btn-link f-resto" href="">
                  <i class="icofont-rounded-right"></i>
                  Termes & Condition
                </a>
              </div>

              <div class="col-lg-3 col-md-6 f-cont">
                <div>
                  <h4 class="section-reservation text-start text-primary fw-normal mb-4">
                    Contact
                  </h4>
                </div>

                <p class="mb-2">
                  <i class="icofont-location-pin me-3"></i>
                  123 Street, New York, USA
                </p>

                <p class="mb-2">
                  <i class="icofont-ui-call me-3"></i>
                  +012 345 67890
                </p>

                <p class="mb-2">
                  <i class="icofont-ui-message me-3"></i>
                  info@example.com
                </p>

                <div class="d-flex pt-2">
                  <a class="btn btn-outline-light btn-social" href>
                    <i class="icofont-twitter"></i>
                  </a>

                  <a class="btn btn-outline-light btn-social" href>
                    <i class="icofont-facebook"></i>
                  </a>

                  <a class="btn btn-outline-light btn-social" href>
                    <i class="icofont-youtube-play"></i>
                  </a>

                  <a class="btn btn-outline-light btn-social" href>
                    <i class="icofont-linkedin"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div>
                  <h4 class="section-reservation text-start text-primary fw-normal mb-4">
                    Opening
                  </h4>
                </div>

                <h5 class="text-light">Monday - Saturday</h5>

                <p class="text-light">09AM - 09PM</p>

                <h5 class="text-light">Sunday</h5>

                <p class="text-light">10AM - 08PM</p>
              </div>

              <div class="col-lg-3 col-md-6">
                <div>
                  <h4 class="section-reservation text-start text-primary fw-normal mb-4">
                    Newsletter
                  </h4>
                </div>

                <p class="text-light">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.
                </p>

                <div
                  class="position-relative mx-auto"
                 // style="max-width: 400px;"
                 style={{maxWidth:"400px"}}
                >
                  <input
                    class="form-control border-primary w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />

                  <button
                    type="button"
                    class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="copyright">
              <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0 text-light">
                  ©{" "}
                  <a class="border-bottom" href="#">
                    Your Site Name
                  </a>
                  , All Right Reserved. Designed By
                  <a class="border-bottom" href="https://htmlcodex.com">
                    HTML Codex
                  </a>
                  <br />
                  Distributed By
                  <a
                    class="border-bottom"
                    href="https://themewagon.com"
                    target="_blank"
                  >
                    ThemeWagon
                  </a>
                </div>
                <div class="col-md-6 text-center text-md-end">
                  <div class="footer-menu text-light">
                    <a href>Home</a>
                    <a href>Cookies</a>
                    <a href>Help</a>
                    <a href>FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
