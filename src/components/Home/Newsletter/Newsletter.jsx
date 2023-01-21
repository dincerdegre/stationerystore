import React from "react";
import Input from "../../UIElements/Input/Input";
import Button from "../../UIElements/Button/Button";
import classes from "./Newsletter.module.scss";

const Newsletter = () => {
  const onClickHandler = () => {
    // onClick Handler
  };
  return (
    <div className={classes.newsletter}>
      <div className={classes.container}>
        <span>Join Our Newsletter</span>
        <div className={classes.mail}>
          <Input type="text" placeholder="Enter Your E-mail" />
          <Button onClick={onClickHandler}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
