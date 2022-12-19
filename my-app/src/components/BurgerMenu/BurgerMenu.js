import React from "react";
import styles from "./BurgerMenu.module.css";
import { Fragment } from 'react';
import {NavLink, useHistory} from "react-router-dom";


function BurgerMenu() {
    const history = useHistory();

    const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
    const toggleBurgerMenuOpen = () => {
      setBurgerMenuOpen(!isBurgerMenuOpen)
    }
    const onLogOut = () => {
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <div className={styles["burger-menu"]}>
            {/* По клику на бургер открывается фрагмент с меню с лева */}
            <button className={styles["burger-menu__close-btn"]} type="button" onClick = {toggleBurgerMenuOpen}/>
                 {isBurgerMenuOpen && (
                    <Fragment>
                        <div className={styles["burger-menu__link-list"]}>

                            <NavLink className={styles["burger-menu__link"]} to = "/music" > Главное </NavLink>

                            <NavLink className={styles["burger-menu__link"]} to = "/" > Мои треки </NavLink>

                            <NavLink className={styles["burger-menu__link"]} to = "/login" onClick={onLogOut} > Выйти </NavLink>
                        </div> 
                    </Fragment>
                )}
        </div>
    );
}

export default BurgerMenu;
