import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "../../UIElements/Button/Button";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.top}>
        <div className={`${classes.item} ${classes.itemFirst}`}>
          <h3>Links</h3>
          <ul>
            <li>
              <Button to="/">School</Button>
            </li>
            <li>
              <Button to="/">Office</Button>
            </li>
            <li>
              <Button to="/">Gifts & Decorations</Button>
            </li>
            <li>
              <Button to="/">About</Button>
            </li>
            <li>
              <Button to="/">Contact</Button>
            </li>
          </ul>
        </div>
        <div className={`${classes.item} ${classes.itemSecond} `}>
          <h3>Contact Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={`${classes.item} ${classes.itemThird}`}>
          <h3>Our Company</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={`${classes.item} ${classes.itemFourth}`}>
          <h3>Social</h3>
          <p>
            <FacebookIcon fontSize="large" /> <InstagramIcon fontSize="large" />{" "}
            <TwitterIcon fontSize="large" /> <YouTubeIcon fontSize="large" />{" "}
          </p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <span>© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className={classes.right}>
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
