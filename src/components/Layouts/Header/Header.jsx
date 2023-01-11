import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const openCartHandler = () => {
    setOpenCart((prev) => !prev);
  };

  const closeCartHandler = () => {
    setOpenCart(false);
  };

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="left">
          <Link className="link" to="/">
            STATIONARY STORE
          </Link>
        </div>
        <div className="center">
          <Navbar />
        </div>
        <div className="right">
          <HeaderIcons cartOnClick={openCartHandler} />
        </div>
      </div>
      {openCart && <CartList onCartClose={closeCartHandler} onOpenCart={openCart} />}
    </div>
  );
};

export default Header;
