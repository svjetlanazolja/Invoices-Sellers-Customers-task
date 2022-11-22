import React from "react";
import { NavLink } from "react-router-dom";
import IconNavbar from "./IconNavbar";

const NavbarIcon = () => {
  const activeLink = "test ";
  const normalLink = " ";
  return (
    <section>
      <div className="test">
        {IconNavbar.map((item, index) => {
          return (
            <div key={index}>
              <div className="test">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="centered">{item.icon}</span>
                  <span>{item.title}</span>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NavbarIcon;
