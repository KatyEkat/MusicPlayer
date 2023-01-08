import React from "react";
import styles from "./BurgerMenu.module.css";
import { Fragment } from 'react';
import { useHistory} from "react-router-dom";
import { useTheme } from "../../Providers/ThemeProvider";
import { REFRESH_TOKEN } from "../../Consts/Backups";
import { NavigationNavLink } from "../Navigation/NavigationNavLink";




function BurgerMenu() {

    const history = useHistory();
    const {themeMode, changeTheme} = useTheme();

    const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
    const toggleBurgerMenuOpen = () => {
      setBurgerMenuOpen(!isBurgerMenuOpen)
    }
    const onLogOut = () => {
        localStorage.removeItem(REFRESH_TOKEN);
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
                            <NavigationNavLink  to = "/music" > Главное </NavigationNavLink>
                            <NavigationNavLink  to = "/favorite" > Мои треки </NavigationNavLink>
                            <NavigationNavLink  to = "/login" onClick={onLogOut} > Выйти </NavigationNavLink>
                            

                            <button className={styles[`burger-menu__link_change_theme_${themeMode}`]} onClick={onChangeTheme}> </button> 
                            
                        
                        </div> 

                    </Fragment>
                )}
        </div>
    );
}

export default BurgerMenu;
