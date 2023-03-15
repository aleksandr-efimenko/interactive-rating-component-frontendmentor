import React, { useEffect, useState } from "react";

export default function Rating({ handleSubmit }) {
  const [hover, setHover] = useState(false);
  const [rating, setRating] = useState(0);

  const handleClick = (e) => {
    setRating(Number(e.target.value));
  };
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
      <form onSubmit={handleSubmit} className="rating-form">
        <div className="rating-buttons">
          <input
            type="radio"
            name="rating"
            id="r1"
            value="1"
            onClick={handleClick}
          />
          <label htmlFor="r1" className="round-container">
            1
          </label>
          <input
            type="radio"
            name="rating"
            id="r2"
            value="2"
            onClick={handleClick}
          />
          <label htmlFor="r2" className="round-container">
            2
          </label>
          <input
            type="radio"
            name="rating"
            id="r3"
            value="3"
            onClick={handleClick}
          />
          <label htmlFor="r3" className="round-container">
            3
          </label>
          <input
            type="radio"
            name="rating"
            id="r4"
            value="4"
            onClick={handleClick}
          />
          <label htmlFor="r4" className="round-container">
            4
          </label>
          <input
            type="radio"
            name="rating"
            id="r5"
            value="5"
            onClick={handleClick}
          />
          <label htmlFor="r5" className="round-container">
            5
          </label>
        </div>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={!rating ? { cursor: "not-allowed" } : { cursor: "pointer" }}
          className="button"
          type="submit"
        >
          {!rating && hover ? "Please select" : "Submit"}
        </button>
      </form>
    </>
  );
}
