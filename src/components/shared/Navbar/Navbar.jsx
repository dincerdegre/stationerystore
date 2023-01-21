import React from "react";
import Button from "../../UIElements/Button/Button";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div id="cat1">
        <Button className="link" to="/">
          School
        </Button>
      </div>
      <div id="cat2">
        <Button className="link" to="/">
          Office
        </Button>
      </div>
      <div id="cat3">
        <Button className="link" to="/">
          Gifts & Decorations
        </Button>
      </div>
      <div id="cat4">
        <Button className="link" to="/">
          About
        </Button>
      </div>
      <div id="cat5">
        <Button className="link" to="/">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
