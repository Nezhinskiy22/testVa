import React from "react";
import { Link } from "react-router-dom";

const Line = ({ data }) => {
  return (
    <div>
      <Link to="/">
        <button style={{ margin: "20px", padding: "10px" }}>To 1st page</button>
      </Link>
      Line
    </div>
  );
};

export default Line;
