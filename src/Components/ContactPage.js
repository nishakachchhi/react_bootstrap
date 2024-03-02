import React, { Component } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";

class ContactPage extends Component {
  render() {
    return (
      <div>
        {/* main section */}

        <MainSection mainsectionContect="Contact Us" />

        {/* contect section */}

        <Contact />
      </div>
    );
  }
}
export default ContactPage;
