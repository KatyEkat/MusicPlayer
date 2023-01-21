import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
    return (
        <div className={styles["navigationMenu"]}>
            <NavLink className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_daily_playList}`} to="/playListOfTheDay"/>

            <NavLink className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_top_100}`} to="/top100"/>

            <NavLink className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_indy}`} to="/indyPlaylist"/>
        </div>
    );
}

export default NavigationMenu;
