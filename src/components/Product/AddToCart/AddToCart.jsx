import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import classes from "./AddToCart.module.scss";

const AddToCart = ({ onClick }) => {
  return (
    <button className={classes.addtoCart} onClick={onClick}>
      <AddShoppingCartIcon /> Add to Cart
    </button>
  );
};

export default AddToCart;
