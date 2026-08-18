import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";


const Button = ({
  text,
  to,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) => {

  /* =========================
     ROUTER LINK
  ========================= */

  if (to) {
    return (
      <Link
        to={to}
        className={`button button-${variant}`}
      >
        {text}
      </Link>
    );
  }


  /* =========================
     NORMAL BUTTON
  ========================= */

  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};


export default Button;