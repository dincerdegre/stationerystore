import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./AddToCart.scss";

const AddToCart = ({ onClick }) => {
  return (
    <button className="addtoCart" onClick={onClick}>
      <AddShoppingCartIcon /> Add to Cart
    </button>
  );
};

export default AddToCart;
