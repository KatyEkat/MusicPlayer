import React, { useState} from "react";
import { useThemeContext } from "../Theme/Theme";
import styles from "./ThemeSwitcher.module.css";
import {ThemeContext, themes} from "../Theme/Theme";


export const ThemeSwitcher = () => {
    const { toggleTheme } = useThemeContext();

    return <button onClick={toggleTheme} className={styles["theme_switcher_btn"]}> Change Theme </button>
};


export const DynamicContextApp = () => {
  const[currentTheme, setCurrentTheme] = useState (themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme}}>
      <ThemeSwitcher />
    </ThemeContext.Provider>
  )

}
