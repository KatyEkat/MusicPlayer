import React from 'react'
import logoWhite from "../../images/logoWhite.png";
import styles from"./Logo.module.css";

function Logo() {
  return (
      <img className={styles["logo"]} src={logoWhite} alt="Логотип" />
  );
}

export default Logo;
