import React from "react";
import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
    return (
        <div className={styles["navigationMenu"]}>
            <button className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_daily_playList}`} ></button>
            <button className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_top-100}`}></button>
            <button className={`${styles.navigationMenu__link} ${styles.navigationMenu__link_indy}`}></button>
        </div>
    );
}

export default NavigationMenu;
