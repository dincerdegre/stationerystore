import React from "react";
import classes from "./PriceItem.module.scss";

const PriceItem = ({price, oldPrice}) => {
  return (
    <div className={classes.priceTextContainer}>
      <div className={classes.price}>
        <span>${price}</span>
      </div>
      <div className={classes.oldPrice}>${oldPrice}</div>
    </div>
  );
};

export default PriceItem;
