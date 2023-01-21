import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from '../../UIElements/Button/Button';
import classes from "./AddToCart.module.scss";

const AddToCart = ({ onClick }) => {
  return (
    <Button className={classes.addtoCart} onClick={onClick}>
      <AddShoppingCartIcon /> Add to Cart
    </Button>
  );
};

export default AddToCart;
