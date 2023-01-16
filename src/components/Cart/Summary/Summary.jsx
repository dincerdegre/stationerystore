import React from "react";
import classes from "./Summary.module.scss";

const Summary = ({ subtotal, tax, shipping, total, moneySymbol = "$" }) => {
  return (
    <div className={classes.summary}>
      <div className={classes.item} id="subtotal">
        <div className={classes.title}>Subtotal</div>
        <div className={classes.amount}>
          {moneySymbol}
          {subtotal}
        </div>
      </div>
      <div className={classes.item} id="tax">
        <div className={classes.title}>Taxes</div>
        <div className={classes.amount}>
          {moneySymbol}
          {tax}
        </div>
      </div>
      <div className={classes.item} id="shipping">
        <div className={classes.title}>Shipping</div>
        <div className={classes.amount}>
          {moneySymbol}
          {shipping}
        </div>
      </div>
      <div className={classes.item} id="total">
        <div className={classes.title}>Total</div>
        <div className={`${classes.amount} ${classes.total}`}>
          {moneySymbol}
          {total}
        </div>
      </div>
    </div>
  );
};

export default Summary;
