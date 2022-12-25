import React from "react";
import styles from "./BurgerMenu.module.css";
import { Fragment } from 'react';
import {NavLink, useHistory} from "react-router-dom";
import { useTheme } from "../../Providers/ThemeProvider";



function BurgerMenu() {
    const history = useHistory();
    const {themeMode, changeTheme} = useTheme();

    const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
    const toggleBurgerMenuOpen = () => {
      setBurgerMenuOpen(!isBurgerMenuOpen)
    }
    const onLogOut = () => {
        localStorage.removeItem("token");
        history.push("/login");
    }

    const onChangeTheme = () => {
        changeTheme(themeMode === "light" ? "dark" : "light")
    }

    return (
        <div className={styles["burger-menu"]}>
            {/* По клику на бургер открывается фрагмент с меню с лева */}
            <button className={styles["burger-menu__close-btn"]} type="button" onClick = {toggleBurgerMenuOpen}/>
                 {isBurgerMenuOpen && (
                    <Fragment>
                        <div className={styles["burger-menu__link-list"]}>

                            <NavLink className={styles["burger-menu__link"]} to = "/music" > Главное </NavLink>

                            <NavLink className={styles["burger-menu__link"]} to = "/music" > Мои треки </NavLink>

                            <NavLink className={styles["burger-menu__link"]} to = "/login" onClick={onLogOut} > Выйти </NavLink>

                            <button className={styles[`burger-menu__link_change_theme_${themeMode}`]} onClick={onChangeTheme}> </button> 
                            
                        
                        </div> 
                    </Fragment>
                )}
        </div>
    );
}

export default BurgerMenu;
