import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput"
import React from 'react'
import styles from "./Header.module.css";

const Header = ()  => {  
  return (
    <div className={styles["header"]}>
      <Logo />
      <SearchInput />
    </div>
  );
};

export default Header;