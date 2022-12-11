import React from "react";
import styles from "./BurgerMenu.module.css";
import { Fragment } from 'react';


function BurgerMenu() {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
    const toggleBurgerMenuOpen = () => {
      setBurgerMenuOpen(!isBurgerMenuOpen)
    }
    return (
        <div className={styles["burger-menu"]}>
            {/* По клику на бургер открывается фрагмент с меню с лева */}
            <button className={styles["burger-menu__close-btn"]} type="button" onClick = {toggleBurgerMenuOpen}/>
                 {isBurgerMenuOpen && (
                    <Fragment>
                        <div className={styles["burger-menu__link-list"]}>
                            <a to="/" className={styles["burger-menu__link"]} >
                                Главное
                            </a>

                            <a to="/user-playlist" className={styles["burger-menu__link"]} >
                                Мои треки
                            </a>

                            <a to="/signin" className={styles["burger-menu__link"]} >
                                Выйти
                            </a>
                        </div> 
                    </Fragment>
                )}
        </div>
    );
}

export default BurgerMenu;
