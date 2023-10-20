import React from "react";
import { images } from "../../constants";


import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar-brands">
        <img src={images.brand1} alt="brand1" />
        <img src={images.brand2} alt="brand2" />
      </div>
    </nav>
  );
};

export default Navbar;
