import React from "react";
import "./Check.scss";
import { images } from "../../constants";
import Button from '@material-ui/core/Button';

const Check = () => {
  return (
    <>
      <div className="app__check">
        <div className="app__check-block">
          <img src={images.check} alt="check" />
          <h5 className="bold-text">
            Negative Ion Technology may help with allergens
          </h5>
        </div>
        <div className="app__check-block">
          <img src={images.check} alt="check" />
          <h5 className="bold-text">Designed for air rejuvenation</h5>
        </div>
        <div className="app__check-block">
          <img src={images.check} alt="check" />
          <h5 className="bold-text">
            Perfect for every room in all types of places.
          </h5>
        </div>
      </div>
      <Button className="app__button" color="primary" variant="contained" disableElevation>
      Yes - Claim my discount
    </Button>
    </>
  );
};

export default Check;
