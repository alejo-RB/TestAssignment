import React from "react";
import "./Product.scss";
import { images } from "../../constants";
import { Testimonial, Description, Check } from "../../container";

const Product = () => {
  return (
    <>
      <div className="app__product">
        <div className="app__product-item app__flex">
          <div className="app__product-content">
            <img src={images.product} alt="product" />
            <Testimonial />
          </div>
          <div className="app__product-content">
            <h2 className="head-text2">
              <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
              only <span>$14 each</span> ($84.00 total!)
            </h2>
            <Description />
            <Check/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
