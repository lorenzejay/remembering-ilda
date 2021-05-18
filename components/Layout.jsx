import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
const Layout = ({ children, bgColor = "#dceae6" }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mahjongtiles.png" />
      </Head>
      <div className={`${bgColor}`}>{children}</div>
    </>
  );
};

export default Layout;
