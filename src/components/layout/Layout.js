import React from "react";
import Header from "./header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
