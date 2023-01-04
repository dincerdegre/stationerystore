import React from "react";
import "./PriceItem.scss";

const PriceItem = ({ price, oldPrice}) => {
  return (
    <div className="priceTextWrapper">
      <div className="priceText">
        <span>${price}</span>
      </div>
      <div className="oldPriceText">${oldPrice}</div>
    </div>
  );
};

export default PriceItem;
