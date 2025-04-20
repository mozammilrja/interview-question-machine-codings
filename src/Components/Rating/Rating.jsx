import React, { useState } from "react";

const Rating = () => {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rating</h1>

      <div style={{ color: "gray", fontSize: "80px", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            style={{ color: (hover || star) >= index ? "yellow" : "gray" }}
            onClick={() => setStar(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>
      <p>Selected Rating: {star}</p>
    </div>
  );
};

export default Rating;
