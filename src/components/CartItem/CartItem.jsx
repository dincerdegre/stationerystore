import React, { useState, useContext,useEffect } from "react";
import CartContext from "../../context/cart-context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./CartItem.scss";
import CountSelector from "../CountSelector/CountSelector";

const CartItem = ({ id, title, image, quantity, price }) => {
  const [selectedCount, setSelectedCount] = useState(quantity);
  const cartContext = useContext(CartContext);

  const countChangeHandler = (qty) => {
    setSelectedCount(qty);
  };

  useEffect(() => {
    cartContext.updateItem(id, selectedCount);
  },[selectedCount,cartContext,id]);
  
  
  return (
    <div className="itemCart">
      <div className="itemImage">
        <img src={image} alt={title} />
      </div>
      <div className="itemDetails">
        <div className="itemTitle">{title}</div>
        <div className="priceAndQuantity">
          {quantity} Qty x ${price}
        </div>
        <div className="itemCartCounter">
          <CountSelector onCounterChange={countChangeHandler} val={selectedCount} />
        </div>
        <div className="totalPrice noSelect">${quantity * price}</div>
      </div>
      <div
        className="itemDelete"
        onClick={() => {
          cartContext.removeItem(id);
        }}
      >
        <DeleteForeverIcon fontSize="large" />
      </div>
    </div>
  );
};

export default CartItem;
