import React, { useState, useContext, useEffect,useRef } from "react";
import CartContext from "../../../context/cart-context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AmountSelector from "../AmountSelector/AmountSelector";
import classes from "./CartItem.module.scss";

const CartItem = ({ id, title, image, quantity, price, onDelete, closeSelector }) => {
  const [selectedAmount, setSelectedAmount] = useState(quantity);
  const cartContext = useRef(useContext(CartContext));

  const amountChangeHandler = (qty) => {
    setSelectedAmount(qty);
  };
  useEffect(() => {
    cartContext.current.updateItem(id, selectedAmount);
  }, [selectedAmount, id,cartContext]);
  
  return (
    <div className={classes.cartItem} id={`cart-${id}`}  data-testid="cartItem">
      <div className={classes.imageContainer}>
       {image && <img src={image[0]} alt={title} /> } 
      </div>
      <div className={classes.detailsContainer}>
        <h3>{title}</h3>
        <div className={classes.quantityPrice}>
          {quantity} Qty x ${price}
        </div>
        <div className={classes.cartAmount}>
          {!closeSelector && <AmountSelector
            onAmountChange={amountChangeHandler}
            val={selectedAmount}
          />}
        </div>
        <div className={`${classes.total} noSelect`}>${quantity * price}</div>
      </div>
      <div
        className={classes.deleteContainer}
        onClick={() => {
          onDelete(id);
        }}
      >
        <DeleteForeverIcon fontSize="large" />
      </div>
    </div>
  );
};

export default CartItem;
