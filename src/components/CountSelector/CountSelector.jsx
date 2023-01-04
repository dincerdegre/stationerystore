import React, { useEffect } from "react";
import useCounter from "../../hooks/useCounter";
import "./CountSelector.scss";

const CountSelector = ({ onCounterChange,val=1,size="medium" }) => {
  const { value, incrementHandler, decrementHandler } = useCounter(val, 90);
  let fontSize;
  if (size === "large") {
    fontSize = "largeSize";
  } else if (size === "small") {
    fontSize = "smallSize";
  } else {
    fontSize = "mediumSize";
  }
  useEffect(() => {
    if (value >= 1) {
      onCounterChange(value);
    }
  }, [value, onCounterChange]);
  
  return (
    <div className="selectorWrapper">
      <button onClick={decrementHandler} className={`${fontSize}`}>-</button>
      <div className={`quantity ${fontSize}`}>{value}</div>
      <button onClick={incrementHandler} className={`${fontSize}`}>+</button>
    </div>
  );
};

export default CountSelector;
