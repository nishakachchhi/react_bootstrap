import React, { Component } from "react";
import Services from "./Services";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";
class ServicesPage extends Component {
  render() {
    return (
      <div>
        {/* main section */}

        <MainSection mainsectionService="Services" />

        {/* service section */}

        <Services />

        <Services />
      </div>
    );
  }
}
export default ServicesPage;
