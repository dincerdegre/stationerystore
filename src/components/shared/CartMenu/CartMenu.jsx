import React, { useContext, useEffect, useRef } from "react";
import CartContext from "../../../context/cart-context";
import Button from '../../UIElements/Button/Button';
import classes from "./CartMenu.module.scss";
import ListItem from "../ListItem/ListItem";

const CartMenu = ({ onCartClose }) => {
  const cartContext = useContext(CartContext);
  const ref = useRef(null);
  const products = cartContext.items;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onCartClose && onCartClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onCartClose]);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };


  return (
    <div className={classes.cartMenu} ref={ref}>
      <div className={classes.top}>
        <h3>Shopping Cart</h3>
      </div>
      <div className={classes.middle}>
        {products.length <= 0 && (
          <div className={classes.emptyCart}>Cart is Empty</div>
        )}
        {products?.map((item,index) => (
          <ListItem
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            quantity={item.quantity}
            price={item.price}
            onDelete={removeItemHandler}
          />
        ))}
      </div>
      <div className={classes.bottom}>
        <div className={classes.subtotal}>
          <div className={classes.left}>
            <h4>Subtotal</h4>
            <span>Shipping and Taxes calculated at Checkout Section</span>
          </div>
          <div className={classes.right}>
            <h4>${totalPrice()}</h4>
          </div>
        </div>
        <div className={classes.buttons}>
          <Button to="/cart" className={classes.cartButton} onClick={onCartClose}>
            View Cart
          </Button>
          <Button
            to="/checkout"
            className={`${classes.cartButton} ${classes.checkout}`}
            onClick={onCartClose}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
