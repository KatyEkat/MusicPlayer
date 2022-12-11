
import React from 'react'
import styles from "./SearchInput.module.css";



function SearchInput () {
  
  return (
    <input className={styles['header__input']} placeholder='Поиск'></input>
  );
}

export default SearchInput;