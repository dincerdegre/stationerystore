import React, { Fragment, useContext } from "react";
import CartContext from "../../../context/cart-context";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classes from "./HeaderRight.module.scss";

const HeaderRight = ({ cartOnClick }) => {
  const cartContext = useContext(CartContext);
  return (
    <Fragment>
      <div className={classes.searchButton}>
        <SearchIcon fontSize="large" />
      </div>
      <div className={classes.userButton}>
      <PersonOutlineOutlinedIcon fontSize="large" />
      </div>
      <div className={classes.cartButton} onClick={cartOnClick}>
      <ShoppingCartOutlinedIcon fontSize="large" />
      {cartContext.items.length > 0 ? <span className="noSelect">{cartContext.items.length}</span> : ""}
      </div>
    </Fragment>
  );
};

export default HeaderRight;
