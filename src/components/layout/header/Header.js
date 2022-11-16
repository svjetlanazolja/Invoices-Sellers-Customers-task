import React from "react";
import "./Header.css";
import Link from "./Link/Link";
import { AiFillApple } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="header">
      <Link route="/invoices" isActive={true}>
        <AiFillApple style={{ fontSize: "32px" }} />
      </Link>
      <Link route="/customers" isActive={false}>
        <AiFillApple style={{ fontSize: "32px" }} />
      </Link>
      <Link route="/sellers" isActive={false}>
        <AiFillApple style={{ fontSize: "32px" }} />
      </Link>
    </nav>
  );
};

export default Header;
