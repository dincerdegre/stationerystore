import React from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletterContainer">
        <span>Join Our Newsletter</span>
        <div className="mail">
          <input type="text" placeholder="Enter Your E-mail" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
