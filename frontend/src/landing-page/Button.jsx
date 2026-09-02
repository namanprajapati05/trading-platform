import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ text, path }) => {

      const [hover, setHover] = useState(false);

  return (
    <Link to={path}>
      <button    onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "0.4rem 2rem",
          fontSize: "1.5rem",
          border: "none",
          borderRadius: "0.2rem",
          backgroundColor: hover ? "black" : "rgb(33, 92, 152)",
          color: "white",
          fontWeight: "600",
        //   marginTop: "3rem",
          cursor: "pointer",
        }}
      >

        {text}</button>
    </Link>
  );
};

export default Button;