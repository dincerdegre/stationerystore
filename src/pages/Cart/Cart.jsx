import React, { useContext } from "react";
import Summary from "../../components/Cart/Summary/Summary";
import Button from "../../components/UIElements/Button/Button";
import CartContext from "../../context/cart-context";
import CartItem from "../../components/shared/CartItem/CartItem";
import classes from "./Cart.module.scss";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const products = cartContext.items;

  const subtotalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const taxAmount = (taxRate = 1.08) => {
    const withTax = (subtotalPrice() * taxRate).toFixed(2);
    return (withTax - subtotalPrice()).toFixed(2);
  };

  const totalPrice = (shipping = 5.0) => {
    const total =
      parseFloat(subtotalPrice()) + parseFloat(taxAmount()) + shipping;
    return total.toFixed(2);
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <div className={classes.cartPageContainer}>
      <div className={classes.top}>
        <h2>Shopping Cart</h2>
        <span>You can add or remove your items in Shopping Cart</span>
      </div>
      <div className={classes.middle}>
        <div className={classes.left}>
          {products.length <= 0 && (
            <div className={classes.emptyCart}>Cart is Empty</div>
          )}
          {products?.map((item) => (
            <CartItem key={item.id} id={item.id} title={item.title} image={item.image} quantity={item.quantity} price={item.price} onDelete={removeItemHandler} />
          ))}
        </div>
        <div className={classes.right}>
          <div className={classes.stickyOrder}>
            <h4>Order Summary</h4>
            <Summary
              subtotal={subtotalPrice()}
              tax={taxAmount()}
              shipping="5.00"
              total={totalPrice()}
            />
            <div className={classes.checkout}>
            <Button to="/checkout">Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
