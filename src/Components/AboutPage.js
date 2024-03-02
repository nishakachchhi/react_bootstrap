import React, { Component } from "react";
import About from "./About";
import Team from "./Team";
import MainSection from "./MainSection";

class AboutPage extends Component {
  render() {
    return (
      <div>
        {/* main section */}

        <MainSection mainsectionAbout="About Us" />

        {/* about section */}

        <About />

        {/* team section */}

        <Team />
      </div>
    );
  }
}
export default AboutPage;
