import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartContext from "../../context/cart-context";
import "./Cart.scss";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const products = cartContext.items;

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const taxAmount = (taxRate=1.08) => {
    const withTax = (totalPrice() * taxRate).toFixed(2);
    return (withTax - totalPrice()).toFixed(2);
  }

  return (
    <div className="cartPageContainer">
      <div className="cartPageTop">
        <h2>Shopping Cart</h2>
        <span>You can add or remove your items in Shopping Cart</span>
      </div>
      <div className="cartPageMiddle">
        <div className="cartPageLeft">
          {products.length <= 0 && (
            <div className="emptyCart">Cart is Empty</div>
          )}
          {products?.map((item) => (
            <CartItem key={item.id} id={item.id} title={item.title} image={item.image} quantity={item.quantity} price={item.price} />
          ))}
        </div>
        <div className="cartPageRight">
          <div className="stickyOrder">
            <h4>Order Summary</h4>
            <div className="orderSummary">
              <div className="summaryItem">
                <div className="sumTitle">Subtotal</div>
                <div className="sumAmount">${totalPrice()}</div>
              </div>
              <div className="summaryItem">
                <div className="sumTitle">Taxes</div>
                <div className="sumAmount">${taxAmount()}</div>
              </div>
              <div className="summaryItem">
                <div className="sumTitle">Shipping</div>
                <div className="sumAmount">$5.00</div>
              </div>
              <div className="summaryItem">
                <div className="sumTitle">Total</div>
                <div className="sumAmount sumTotal">${(parseFloat(totalPrice()) + parseFloat(taxAmount()) + 5.00).toFixed(2)}</div>
              </div>
              <div className="summaryCheckout">
                <Link to="/checkout" className="sumCheckout">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
