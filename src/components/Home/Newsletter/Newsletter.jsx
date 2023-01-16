import React from "react";
import classes from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
      <div className={classes.container}>
        <span>Join Our Newsletter</span>
        <div className={classes.mail}>
          <input type="text" placeholder="Enter Your E-mail" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
