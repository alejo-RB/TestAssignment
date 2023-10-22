import React from "react";
import { images } from "../../constants";
import "./Testimonial.scss";
import { Ratingdes2 } from "../../container";
import { VscVerifiedFilled as Verified } from "react-icons/vsc";

const Testimonial = () => {
  return (
    <>
      <div className="app__testimonial-item app__flex">
        <div className="blok-testimonial">
          <img src={images.testimonial} alt="product" />
          <div className="starts">
            <Ratingdes2 />
            <div className="starts-text">
              <p className="p-text">Ken T.</p>
              <div className="blok-icon">
                <Verified className="icon-verified" />
                <p className="p-text">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="app__testimonial-content">
          <h5 className="bold-text p-text-testimonial">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </h5>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
