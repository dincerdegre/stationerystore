import React,{useState} from "react";
import Input from "../../UIElements/Input/Input";
import Textarea from "../../UIElements/Textarea/Textarea";
import classes from "./CheckoutForm.module.scss";

const CheckoutForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate,setExpDate] = useState("");
  const [cvc,setCvc] = useState("");

  const formatCardNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");
    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }
    const splits = inputNumbersOnly.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
    setCardNumber(spacedNumber);
  };

  const formatExpDate = (e) => {
    const inputVal = e.target.value.replace(/\//g,"");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");
    if (inputNumbersOnly.length > 4){
      inputNumbersOnly = inputNumbersOnly.substr(0,4);
    }
    const splits = inputNumbersOnly.match(/.{1,2}/g);
    let spacedNumber = "";
    if (splits){
      spacedNumber = splits.join("/");
    }
    setExpDate(spacedNumber);
  }

  const formatCvc = (e) => {
    const inputVal = e.target.value;
    let inputNumberOnly = inputVal.replace(/\D/g, "");
    if (inputNumberOnly >3) {
      inputNumberOnly = inputNumberOnly.substr(0,3);
    }
    setCvc(inputNumberOnly);
  }

  return (
    <div className={classes.checkoutForm}>
      <form onSubmit={onSubmit}>
        <h3>Contact Info</h3>
        <div className={classes.item} id="phonenumber">
          <Input
            label="Your Phone Number"
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
          />
          <Input
            label="Your Email"
            type="email"
            name="email"
            placeholder="Enter Email Address"
          />
        </div>
        <h3>Shipping Address</h3>
        <div className={`${classes.item} ${classes.flex}`}>
          <div className={classes.half}>
            <Input
              label="First Name"
              type="text"
              name="name"
              placeholder="First Name"
            />
          </div>
          <div className={classes.half}>
            <Input
              label="Last Name"
              type="text"
              name="surname"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className={classes.item}>
          <Textarea label="Address" name="address" rows="4" cols="50" />
        </div>
        <h3>Payment Info</h3>
        <div className={classes.item}>
          <Input
            label="Card Number"
            type="text"
            name="cardnumber"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={formatCardNumber}
          />
          <Input label="Name on Card" type="text" name="cardowner" placeholder="Name Surname" />
        </div>
        <div className={`${classes.item} ${classes.flex}`}>
          <div className={classes.half}>
            <Input label="Expiration Date MM/YY" type="text" name="expdate" placeholder="01/23" value={expDate} onChange={formatExpDate} />
          </div>
          <div className={classes.half}>
            <Input label="CVC" type="password" name="cvc" placeholder="123" value={cvc} onChange={formatCvc} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
