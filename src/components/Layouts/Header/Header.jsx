import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '../../UIElements/Button/Button';
import CartMenu from "../../shared/CartMenu/CartMenu";
import HeaderRight from "../../shared/HeaderRight/HeaderRight";
import Navbar from "../../shared/Navbar/Navbar";
import classes from "./Header.module.scss";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [isCartButtonClicked,setIsCartButtonClicked] = useState(false);
  const openCartHandler = () => {
    if(!isCartButtonClicked && openCart === false){
        setOpenCart(true);
      } else {
        setOpenCart(false);
      }
  };
  const closeCartHandler = () => {
    setOpenCart(false);
  };

  useEffect(() => {
    if(openCart) {
      setIsCartButtonClicked(true);
    } else {
      setIsCartButtonClicked(false);
    }
  },[openCart]);

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Button className="link" to="/">
            STATIONARY STORE
          </Button>
        </div>
        <div className={classes.center}>
          <Navbar />
        </div>
        <div className={classes.right}>
          <HeaderRight cartOnClick={openCartHandler} />
        </div>
      </div>
      {openCart && <CartMenu onCartClose={closeCartHandler} cartButtonClicked={isCartButtonClicked} />}
    </div>
  );
};

export default Header;
