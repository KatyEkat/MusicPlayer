import React from 'react'
import { useTheme } from '../../Providers/ThemeProvider';
import styles from"./Logo.module.css";


function Logo() {
  const {themeMode} = useTheme()
  return (
      // eslint-disable-next-line no-undef
      <img 
        className={styles["logo"]} 
        src={require(`./../../images/logo_${themeMode}.png`)} 
        alt="Логотип" 
      />
  );
}

export default Logo;
