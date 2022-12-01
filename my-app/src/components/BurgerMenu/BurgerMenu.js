import React from "react";
import "./BurgerMenu.css";
import { Fragment } from 'react';


function BurgerMenu() {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
    const toggleBurgerMenuOpen = () => {
      setBurgerMenuOpen(!isBurgerMenuOpen)
    }
    return (
        <div className={`burger-menu`}>
            {/* По клику на бургер открывается фрагмент с меню с лева */}
            <button className="burger-menu__close-btn" type="button" onClick = {toggleBurgerMenuOpen}/>
                 {isBurgerMenuOpen && (
                    <Fragment>
                        <div className="burger-menu__link-list">
                            <a exact to="/" className="burger-menu__link" >
                                Главное
                            </a>

                            <a to="/user-playlist" className="burger-menu__link" >
                                Мои треки
                            </a>

                            <a to="/signin" className="burger-menu__link" >
                                Выйти
                            </a>
                        </div> 
                    </Fragment>
                )}
        </div>
    );
}

export default BurgerMenu;
