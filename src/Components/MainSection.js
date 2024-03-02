import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./MainSection.css"

 class MainSection extends Component {
  constructor(props) {
    super(props)
  
    this.state = props;
  }
  render() {
    return (
      <div>
         {/* main section */}
         <div className="hero">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1
                className="display-3 text-white mb-3 animated slideInDown"
                data-aos="fade-down"
              >
                {this.props.mainsectionAbout}
                {this.props.mainsectionService}
                {this.props.mainsectionFood}
                {this.props.MainsectionBooking}
                {this.props.MainsectionOurteam}
                {this.props.mainsectionContect}
              </h1>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item">
                    <Link to="#" className="primey">
                      Home
                    </Link>
                  </li>

                  <li className="breadcrumb-item primey">
                    <Link to="#" className="primey">
                      Pages
                    </Link>
                  </li>

                  <li className="breadcrumb-item text-white">
                    <Link to="#">About</Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainSection