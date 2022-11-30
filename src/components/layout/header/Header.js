import React from "react";
import "./Header.css";
import { FaCompass } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { MdSchool } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="header navLinks">
        <NavLink
          to="invoices"
          className={({ isActive }) =>
            isActive ? "iconNavbarAddActive" : "iconNavbarAdd"
          }
        >
          <FaCompass style={{ fontSize: "42px", color: "#707070" }} />
        </NavLink>

        <NavLink
          to="sellers"
          className={({ isActive }) =>
            isActive ? "iconNavbarAddActive" : "iconNavbarAdd"
          }
        >
          <BiTargetLock style={{ fontSize: "42px", color: "#707070" }} />
        </NavLink>

        <NavLink
          to="customers"
          className={({ isActive }) =>
            isActive ? "iconNavbarAddActive" : "iconNavbarAdd"
          }
        >
          <MdSchool style={{ fontSize: "42px", color: "#707070" }} />
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
