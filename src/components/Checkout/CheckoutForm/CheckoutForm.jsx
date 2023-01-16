import React from "react";
import classes from "./CheckoutForm.module.scss";

const CheckoutForm = ({onSubmit}) => {
  return (
    <div className={classes.checkoutForm}>
      <form onSubmit={onSubmit}>
        <h3>Contact Info</h3>
        <div className={classes.item} id="phonenumber">
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
        <div className={`${classes.item} ${classes.flex}`}>
          <div className={classes.half}>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="name" placeholder="First Name" />
          </div>
          <div className={classes.half}>
            <label htmlFor="surname">Last Name</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className={classes.item}>
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" rows="4" cols="50"></textarea>
        </div>
        <h3>Payment Info</h3>
        <div className={classes.item}>
          <label htmlFor="cardnumber">Card Number</label>
          <input type="text" name="cardnumber" id="cardnumber" placeholder="" />
          <label htmlFor="cardowner">Name on Card</label>
          <input type="text" name="cardowner" id="cardowner" placeholder="" />
        </div>
        <div className={`${classes.item} ${classes.flex}`}>
          <div className={classes.half}>
            <label htmlFor="expdate">Expiration Date MM/YY</label>
            <input type="text" name="expdate" id="expdate" placeholder="" />
          </div>
          <div className={classes.half}>
            <label htmlFor="cvc">CVC</label>
            <input type="text" name="cvc" id="cvc" placeholder="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
