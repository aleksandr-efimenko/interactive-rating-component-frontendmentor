import { useState } from "react";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

function App() {
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    setCount(Number(formJson.rating));
  };
  return (
    <div className="rating-container">
      {count === 0 ? (
        <Rating
          handleSubmit={handleSubmit}
          rating={count}
          setRating={setCount}
        />
      ) : (
        <Thanks rating={count} />
      )}
    </div>
  );
}

export default App;
