import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput"
import React from 'react'
import "./Header.css";

const Header = ()  => {  
  return (
    <div className="header">
      <Logo />
      <SearchInput />
    </div>
  );
};

export default Header;