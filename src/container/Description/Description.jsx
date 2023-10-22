import React from "react";
import "./Description.scss";
import { images } from "../../constants";
import { Ratingdes } from "../../container";

const Description = () => {
  return (
    <>
      <div className="app__description-item app__flex">
        <img src={images.description} alt="description" />
        <div className="app__description-content">
          <div className="title-price">
            <p className="p-text">Clarifion Air Ionizer</p>
            <div className="price">
              <h5 className="p-text">$180</h5>
              <p className="p-text">
                <span>$84</span>
              </p>
            </div>
          </div>
          <div>
            <Ratingdes />
            <div className="block-point">
              <img src={images.point} alt="point" />
              <h5 className="bold-text">12 left in Stock</h5>
            </div>
            <h5 className="bold-text parrafo-testimonial">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
