import React from 'react'
import logoDark from "../../images/logoDark.png";
import styles from"./LogoDark.module.css";

function LogoDark() {
  return (
      <img className={styles["logoDark"]} src={logoDark} alt="Логотип" />
  );
}

export default LogoDark;
