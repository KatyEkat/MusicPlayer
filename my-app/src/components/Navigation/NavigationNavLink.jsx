import React from "react";
import style from "../BurgerMenu/BurgerMenu.module.css";
import {NavLink} from "react-router-dom";
import { useTheme } from "../../Providers/ThemeProvider";

// eslint-disable-next-line react/prop-types
export const NavigationNavLink = ({children, to, onClick}) => {
    const {theme} = useTheme()
    return(
        <NavLink 
            className={style["burger-menu__link"]}
            style={{color:theme.color}}  
            to={to} 
            onClick={onClick}> 
            {children} 
        </NavLink>
    )
}