import React, { useEffect } from "react";
import useCounter from "../../../hooks/useCounter";
import classes from "./AmountSelector.module.scss";

const AmountSelector = ({ onAmountChange, val = 1, size = "medium" }) => {
  const { value, incrementHandler, decrementHandler } = useCounter(val, 99);
  let fontSize;
  if (size === "large") {
    fontSize = classes.largeSize;
  } else if (size === "small") {
    fontSize = classes.smallSize;
  } else {
    fontSize = classes.mediumSize;
  }
  useEffect(() => {
    if (value >= 1) {
      onAmountChange(value);
    } else {
      onAmountChange(1);
    }
  }, [value, onAmountChange]);
  
  return (
    <div className={classes.selectorContainer}>
      <button onClick={decrementHandler} className={`${fontSize}`}>
        -
      </button>
      <div className={`${classes.quantity} ${fontSize} noSelect`}>{value}</div>
      <button onClick={incrementHandler} className={`${fontSize}`}>
        +
      </button>
    </div>
  );
};

export default AmountSelector;
