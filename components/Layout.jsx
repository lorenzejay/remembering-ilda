import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, bgColor = "#dceae6" }) => {
  return (
    <>
      <div className={`${bgColor}`}>{children}</div>
    </>
  );
};

export default Layout;
