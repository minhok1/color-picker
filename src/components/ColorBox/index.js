import React from "react";
import "./index.css";

const ColorBox = (props) => {
  return (
    <div
      style={{ backgroundColor: props.selectedColor }}
      className="colorBox"
    ></div>
  );
};

export default ColorBox;
