import React from "react";


import "./NavigationMenu.css";

function NavigationMenu() {
    return (
        <div className="navigationMenu">
            <button className="navigationMenu__link navigationMenu__link_daily-playList"></button>
            <button className="navigationMenu__link navigationMenu__link_top-100"></button>
            <button className="navigationMenu__link navigationMenu__link_indy"></button>
        </div>
    );
}

export default NavigationMenu;
