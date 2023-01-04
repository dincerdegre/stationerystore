import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import CartContext from "../../context/cart-context";
import "./Checkout.scss";

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const products = cartContext.items;

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const taxAmount = (taxRate = 1.08) => {
    const withTax = (totalPrice() * taxRate).toFixed(2);
    return (withTax - totalPrice()).toFixed(2);
  };

  return (
    <div className="checkoutPageContainer">
      <div className="checkoutPageTop">
        <h2>Checkout</h2>
        <span>
          Please enter your Contact, Shipping Address and Payment Informations{" "}
        </span>
      </div>
      <div className="checkoutPageMiddle">
        <div className="checkoutPageLeft">
          <form>
            <h3>Contact Info</h3>
            <div className="checkoutInfoItem">
              <label htmlFor="phone">Your Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
              />
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
              />
            </div>
            <h3>Shipping Address</h3>
            <div className="checkoutInfoItem checkoutFlex">
              <div className="checkoutLeft">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                />
              </div>
              <div className="checkoutRight">
                <label htmlFor="surname">Last Name</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="checkoutInfoItem">
              <label for="address">Address</label>
              <textarea
                id="address"
                name="address"
                rows="4"
                cols="50"
              ></textarea>
            </div>
            <h3>Payment Info</h3>
            <div className="checkoutInfoItem">
              <label htmlFor="cardnumber">Card Number</label>
              <input
                type="text"
                name="cardnumber"
                id="cardnumber"
                placeholder=""
              />
              <label htmlFor="cardowner">Name on Card</label>
              <input
                type="text"
                name="cardowner"
                id="cardowner"
                placeholder=""
              />
            </div>
            <div className="checkoutInfoItem checkoutFlex">
              <div className="checkoutLeft">
                <label htmlFor="expdate">Expiration Date MM/YY</label>
                <input type="text" name="expdate" id="expdate" placeholder="" />
              </div>
              <div className="checkoutRight">
                <label htmlFor="cvc">CVC</label>
                <input type="text" name="cvc" id="cvc" placeholder="" />
              </div>
            </div>
          </form>
        </div>
        <div className="checkoutPageRight">
          <h4>Order Summary</h4>
          {products.length <= 0 && (
            <div className="emptyCart">Cart is Empty</div>
          )}
          {products?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
          <div className="checkoutOrder">
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
                <div className="sumAmount sumTotal">
                  $
                  {(
                    parseFloat(totalPrice()) +
                    parseFloat(taxAmount()) +
                    5.0
                  ).toFixed(2)}
                </div>
              </div>
              <div className="summaryCheckout">
                <Link to="/checkout" className="sumCheckout">
                  Confirm Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
