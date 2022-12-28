import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./HeaderIcons.scss";

const HeaderIcons = () => {
  return (
    <div className="icons">
      <div className="searchLink">
        <SearchIcon fontSize="large" />
      </div>
      <div className="userLink">
      <PersonOutlineOutlinedIcon fontSize="large" />
      </div>
      <div className="cartLink">
      <ShoppingCartOutlinedIcon fontSize="large" />
      <span>0</span>
      </div>
    </div>
  );
};

export default HeaderIcons;
