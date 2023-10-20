import React from "react";
import { images } from "../../constants";
import "./Header.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="app__container">
        <div className="app__header app__flex">
          <h2 className="head-text">Wait ! your order in progress.</h2>
          <p className="subtitle-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="app__stages">
          <div className="app__stages-items">
            <BsFillCheckCircleFill className="app__stages-check"/>
            <p className="subtitle-text">Step 1 : Cart Review</p>
          </div>
          <div className="app__stages-items">
            <BsFillCheckCircleFill className="app__stages-check"/>
            <p className="subtitle-text">Step 2 : Checkout</p>
          </div>
          <div className="app__stages-items">
            <p className="subtitle-text">Step 3 : Special Offer</p>
          </div>
          <div className="app__stages-items">
            <p className="subtitle-text">Step 4 : Confirmation</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
