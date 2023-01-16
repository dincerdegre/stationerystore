import React from "react";
import classes from "./PriceButton.module.scss";

const PriceButton = ({ price, oldPrice, onClick }) => {
  return (
    <div className={classes.priceContainer}>
      <button onClick={onClick}>
        <span>${price}</span>
      </button>
      <div className={classes.oldPrice}>${oldPrice}</div>
    </div>
  );
};

export default PriceButton;
