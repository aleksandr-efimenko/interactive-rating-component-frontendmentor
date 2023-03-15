import React from "react";

export default function Rating() {
  return (
    <>
      <div className="round-container">
        <img src="../../images/icon-star.svg" alt="Star icon" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className="rating-form">
        <div className="rating-buttons">
          <input type="radio" name="rating" id="r1" />
          <label htmlFor="r1" className="round-container">
            1
          </label>
          <input type="radio" name="rating" id="r2" />
          <label htmlFor="r2" className="round-container">
            2
          </label>
          <input type="radio" name="rating" id="r3" />
          <label htmlFor="r3" className="round-container">
            3
          </label>
          <input type="radio" name="rating" id="r4" />
          <label htmlFor="r4" className="round-container">
            4
          </label>
          <input type="radio" name="rating" id="r5" />
          <label htmlFor="r5" className="round-container">
            5
          </label>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      </>
  );
}
