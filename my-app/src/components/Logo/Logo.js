import React from 'react'
import logoWhite from "../../images/logoWhite.png";
import "./Logo.module.css";

function Logo() {
  return (
      <img className="logo" src={logoWhite} alt="Логотип" />
  );
}

export default Logo;
