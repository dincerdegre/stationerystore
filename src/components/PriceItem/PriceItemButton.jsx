import React from "react";
import "./PriceItemButton.scss";

const PriceItemButton = ({ price, oldPrice,onClick }) => {
  return (
    <div className="priceWrapper">
      <button className="priceButton" onClick={onClick}>
        <span>${price}</span>
      </button>
      <div className="oldPrice">${oldPrice}</div>
    </div>
  );
};

export default PriceItemButton;
