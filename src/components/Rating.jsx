import React from "react";

export default function Rating() {
  return (
    <div className="rating-container">
      <div className="round-container">
        <img src="../../images/icon-star.svg" alt="Star icon" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <div className="rating-buttons">
          <label htmlFor="r1" className="round-container">
            1
            <input type="radio" name="rating" id="r1" />
          </label>
          <label htmlFor="r2" className="round-container">
            2
            <input type="radio" name="rating" id="r2" />
          </label>
          <label htmlFor="r3" className="round-container">
            3
            <input type="radio" name="rating" id="r3" />
          </label>
          <label htmlFor="r4" className="round-container">
            4
            <input type="radio" name="rating" id="r4" />
          </label>
          <label htmlFor="r5" className="round-container">
            5
            <input type="radio" name="rating" id="r5" />
          </label>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
