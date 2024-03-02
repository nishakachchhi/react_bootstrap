import React, { Component } from "react";
import { Link } from "react-router-dom";
import Reservation from "./Reservation";
import MainSection from "./MainSection";

class BookPage extends Component {
  render() {
    return (
      <div>
        {/* main section */}

        <MainSection MainsectionBooking="Booking" />

        {/* booking section */}

        <Reservation />
      </div>
    );
  }
}
export default BookPage;
