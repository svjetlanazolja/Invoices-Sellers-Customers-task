import React from "react";
import "./Link.css";
import { useNavigate } from "react-router-dom";

const Link = ({ route, isActive, children }) => {
  const navigate = useNavigate();
  return (
    <div
      className="link"
      onClick={() => {
        navigate(route);
      }}
    >
      {children}
    </div>
  );
};

export default Link;
