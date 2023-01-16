import React, { useContext } from "react";
import Summary from "../../components/Cart/Summary/Summary";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";
import CartItem from "../../components/shared/CartItem/CartItem";
import Button from "../../components/UIElements/Button/Button";
import CartContext from "../../context/cart-context";
import classes from "./Checkout.module.scss";

const Checkout = () => {
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

  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.top}>
        <h2>Checkout</h2>
        <span>
          Please enter your Contact, Shipping Address and Payment Informations{" "}
        </span>
      </div>
      <div className={classes.middle}>
        <div className={classes.left}>
          <CheckoutForm />
        </div>
        <div className={classes.right}>
          <div className={classes.details}>
            <h4>Order Details</h4>
            {products.length <= 0 && (
              <div className={classes.emptyCart}>
                Cart is Empty.
                <br /> Please Add Products to Checkout
              </div>
            )}
            {products?.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                quantity={item.quantity}
                price={item.price}
                closeSelector
              />
            ))}
          </div>
          {!products.length <= 0 && (
            <div>
              <h4>Order Summary</h4>
              <Summary
                subtotal={subtotalPrice()}
                tax={taxAmount()}
                shipping="5.00"
                total={totalPrice()}
              />
              <div className={classes.confirm}>
                <Button to="/">Confirm Order</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
