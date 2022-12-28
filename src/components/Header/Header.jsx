import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="left">
          <Link className="link" to="/">
            STATIONERY STORE
          </Link>
        </div>
        <div className="center">
            <Navbar />
        </div>
        <div className="right">
            <HeaderIcons />
        </div>
      </div>
    </div>
  );
};

export default Header;
