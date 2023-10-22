import React from "react";
import "./Header.scss";
import { BsFillCheckCircleFill as Check } from "react-icons/bs";
import {PiNumberCircleThreeFill as Number3, PiNumberCircleFourLight as Numer4o} from 'react-icons/pi'

const Header = () => {
  return (
    <>
      <div className="app__master">
        <div className="app__header app__flex">
          <h2 className="head-text">Wait ! your order in progress.</h2>
          <p className="subtitle-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className="app__stages">
          <div className="app__stages-items">
            <Check className="app__stages-check"/>
            <p className="subtitle-text app__stages-disable">Step 1 : </p>
            <p className="subtitle-text">Cart Review</p>
          </div>
          <div className="app__stages-items">
            <Check className="app__stages-check"/>
            <p className="subtitle-text app__stages-disable">Step 2 : </p>
            <p className="subtitle-text">Checkout</p>
          </div>
          <div className="app__stages-items">
            <Number3 className="app__stages-three"/>
            <p className="subtitle-text app__stages-disable">Step 3 : </p>
            <p className="subtitle-text">Special Offer</p>
          </div>
          <div className="app__stages-items">
            <Numer4o className="app__stages-three"/>
            <p className="subtitle-text app__stages-disable">Step 4 : </p>
            <p className="subtitle-text">Confirmation</p>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
