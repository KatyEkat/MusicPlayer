import React from "react";
import styles from "./NavigationMenu.module.css";
import { Link } from "react-router-dom";

function NavigationMenu() {
    return (
        <div className={styles["navigationMenu"]}>
            <Link className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_daily_playList}`} to = "/playlist_of_the_day">
            </Link>


            <Link className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_top_100}`} to = "/top_100">
            </Link>     


            <Link className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_indy}`} to = "/indy_playlist">
            </Link>   
        </div>
    );
}

export default NavigationMenu;
