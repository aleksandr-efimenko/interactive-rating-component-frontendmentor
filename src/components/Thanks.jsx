import React from "react";
import ImgSrc from '/src/images/illustration-thank-you.svg';

export default function ({rating}) {
  return (
    <div className="thanks-container">
      <img src={ImgSrc} alt="Thank you illustration" />
        <p className="rating-selected">You selected {rating} out of 5</p>
      <h1>Thank you! </h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
