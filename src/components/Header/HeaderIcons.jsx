import React, { useContext } from "react";
import CartContext from "../../../context/cart-context";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./HeaderIcons.scss";

const HeaderIcons = ({cartOnClick}) => {
  const cartContext = useContext(CartContext);
  return (
    <div className="icons">
      <div className="searchLink">
        <SearchIcon fontSize="large" />
      </div>
      <div className="userLink">
      <PersonOutlineOutlinedIcon fontSize="large" />
      </div>
      <div className="cartLink" onClick={cartOnClick} >
      <ShoppingCartOutlinedIcon fontSize="large" />
      {cartContext.items.length > 0 ? <span>{cartContext.items.length}</span> : ""}
      </div>
    </div>
  );
};

export default HeaderIcons;
