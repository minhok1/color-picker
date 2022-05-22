import React, { useState } from "react";
import "./index.css";

const ColorChoices = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="colorChoices">
      {props.colors &&
        props.colors.data.colorChoices.map((color, i) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={`colorChoiceBox${i === activeIndex ? " active" : ""}`}
            onClick={() => {
              props.setSelectedColor(color);
              setActiveIndex(i);
            }}
          ></div>
        ))}
    </div>
  );
};

export default ColorChoices;
