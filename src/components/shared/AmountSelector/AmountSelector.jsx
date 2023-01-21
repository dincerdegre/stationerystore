import React, { useEffect } from "react";
import Button from '../../UIElements/Button/Button';
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
      <Button onClick={decrementHandler} className={`${fontSize}`}>
        -
      </Button>
      <div className={`${classes.quantity} ${fontSize} noSelect`} data-testid="value">{value}</div>
      <Button onClick={incrementHandler} className={`${fontSize}`}>
        +
      </Button>
    </div>
  );
};

export default AmountSelector;
