import React from "react";
import Button from "../../UIElements/Button/Button";
import classes from "./PriceButton.module.scss";

const PriceButton = ({ price, oldPrice, onClick }) => {
  return (
    <div className={classes.priceContainer}>
      <Button onClick={onClick} dataTestid="priceButtonClick">
        <span>${price}</span>
      </Button>
      <div className={classes.oldPrice}>${oldPrice}</div>
    </div>
  );
};

export default PriceButton;
