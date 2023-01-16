import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.top}>
        <div className={classes.item}>
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">School</Link>
            </li>
            <li>
              <Link to="/">Office</Link>
            </li>
            <li>
              <Link to="/">Gifts & Decorations</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={classes.item}>
          <h3>Contact</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={classes.item}>
          <h3>Our Company</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={classes.item}>
          <h3>Social</h3>
          <p>
            <FacebookIcon fontSize="large" /> <InstagramIcon fontSize="large" />{" "}
            <TwitterIcon fontSize="large" /> <YouTubeIcon fontSize="large" />{" "}
          </p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <span>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className={classes.right}>
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
