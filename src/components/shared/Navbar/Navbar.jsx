import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div id="cat1">
        <Link className="link" to="/schoolstationery">
          School
        </Link>
      </div>
      <div id="cat2">
        <Link className="link" to="/officestationery">
          Office
        </Link>
      </div>
      <div id="cat3">
        <Link className="link" to="/giftanddecorations">
          Gifts & Decorations
        </Link>
      </div>
      <div id="cat4">
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div id="cat5">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
