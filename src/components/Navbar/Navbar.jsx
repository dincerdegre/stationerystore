import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="item">
        <Link className="link" to="/schoolstationery">
          School
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/officestationery">
          Office
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/giftanddecorations">
          Gifts & Decorations
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div className="item">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
