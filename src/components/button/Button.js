import React from "react";
import "./Button.css";

const STYLES = ["btn--primary"];

const COLOR = ["btn--green", "btn--red", "btn--grey", "btn--yellow"];

const Button = ({ children, type, onClick, buttonStyle, buttonColor }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonColor} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
