import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }
  render() {
    return (
      //data-aos="fade-down-left"
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light bg-lg-">
            <div className="container">
              <Link className="navbar-brand logo" to="#" data-aos="fade-down">
                <h1 className="pt-1">
                  <span className="material-symbols-outlined">restaurant</span>
                  Restoran
                </h1>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                data-aos="fade-left"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar nav-manu">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      style={{ color: " #FEA116!important" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/AboutPage">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/ServicesPage">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/FoodMenuPage">
                      Menu
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/BookPage">
                          Booking
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/TeamPage">
                          Our Team
                        </Link>
                      </li>
                      {/* <li><Link className="dropdown-item" to="./Testimonial/testimonial.html">Testimonial</Link></li>  */}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/ContactPage">
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="#"
                      onClick={this.props.login}
                      className="nav-link"
                    >
                      {this.props.status ? "Logout" : "Login"}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <btn className="book-table">BOOK A TABLE</btn>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
export default Navbar;
