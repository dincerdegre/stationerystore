import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";

const Layout = () => {
  return (
    <div data-testid="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
