import { useState } from "react";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formJson = Object.fromEntries(formData.entries());
    if (!formJson.rating) {
      console.warn("Rating is not set, prevent submit");
      return;
    }
    setCount(Number(formJson.rating));
  };

  return (
    <div className="rating-container">
      {!count ? (
        <Rating
          handleSubmit={handleSubmit}
          rating={count}
        />
      ) : (
        <Thanks rating={count} />
      )}
    </div>
  );
}

export default App;
