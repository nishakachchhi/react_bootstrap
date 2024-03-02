import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import AboutPage from "./Components/AboutPage";
import ServicesPage from "./Components/ServicesPage";
import FoodMenuPage from "./Components/FoodMenuPage";
import BookPage from "./Components/BookPage";
import TeamPage from "./Components/TeamPage";
import ContactPage from "./Components/ContactPage";
import React, { Component } from "react";
import PageNotFound from "./Components/PageNotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: 0,
    };
  }
  loginHandler = () => {
    this.setState({ auth: !this.state.auth }); // Check User Login & Logout
  };
  render() {
    return (
      <>
        <Router>
          {/* <Contact /> */}
          <Navbar login={this.loginHandler} status={this.state.auth} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/AboutPage"
              element={this.state.auth === 0 ? <PageNotFound /> : <AboutPage />}
            />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/FoodMenuPage" element={<FoodMenuPage />} />
            <Route path="/BookPage" element={<BookPage />} />
            <Route path="/TeamPage" element={<TeamPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
