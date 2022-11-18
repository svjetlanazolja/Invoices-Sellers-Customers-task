import React from "react";
import "./Header.css";
import Link from "./Link/Link";
import { FaCompass } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

const Header = () => {
  return (
    <nav className="header">
      <Link route="/invoices" isActive={true}>
        <FaCompass style={{ fontSize: "42px", color: "#707070" }} />
      </Link>
      <Link route="/customers" isActive={false}>
        <BiTargetLock style={{ fontSize: "42px", color: "#707070" }} />
      </Link>
      <Link route="/sellers" isActive={false}>
        <MdSchool style={{ fontSize: "42px", color: "#707070" }} />
      </Link>
    </nav>
  );
};

export default Header;
