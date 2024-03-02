import React, { Component } from "react";
import { Link } from "react-router-dom";
import Team from "./Team";
import MainSection from "./MainSection";

class TeamPage extends Component {
  render() {
    return (
      <div>
        {/* main section */}

        <MainSection MainsectionOurteam="Our Team" />

        {/* team section */}

        <Team />
      </div>
    );
  }
}
export default TeamPage;
