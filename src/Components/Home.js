import React, { Component } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import FoodMenu from "./FoodMenu";
import Reservation from "./Reservation";
import Team from "./Team";

class Home extends Component {
  render() {
    return (
      <div>
    
      {/* home section */}
        <div className="hero">
          <div className="container-xxl py-5 bg-dark hero-header mb-5 hero">
            <div className="container my-5 py-5">
              <div className="row align-item-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                  <h2
                    className="display-3 text-white fw-bold main-content"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    Enjoy Our <br />
                    Delicious Meal
                  </h2>

                  <p
                    className="text-white mb-4 pb-2"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>

                  <Link
                    to="#"
                    className="btn py-sm-3 px-sm-5 btn-book"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    Book a Table
                  </Link>
                </div>

                <div
                  className="col-lg-6 text-center text-lg-end overflow-hidden"
                  data-aos="fade-down"
                >
                  <img src="asset/img/hero.png" alt="main-img" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* services section */}

        <Services/>


        {/* about section */}

        <About/>


        {/* food menu section */}

        <FoodMenu/>


        {/* reservation section */}

        <Reservation/>

        {/* team section */}

        <Team/>
      </div>
    );
  }
}
export default Home;
