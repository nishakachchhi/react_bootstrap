import React, { Component } from "react";
import FoodMenu from "./FoodMenu";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";

class FoodMenuPage extends Component {
  render() {
    return (
      <div>
        {/* main section */}

        <MainSection mainsectionFood="Food Menu" />

        {/* menu section */}

        <FoodMenu />
      </div>
    );
  }
}
export default FoodMenuPage;
