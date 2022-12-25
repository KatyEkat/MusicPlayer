import React from "react";
import styles from "./NotFound.module.css";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Header from "../../components/Header/Header";
// import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { Fragment } from "react";
import stylesApp from "../../App.module.css";
import { NavLink } from "react-router-dom";

function NotFound () {

    return(

        <div className={` ${stylesApp.App}`}>
            <Header />
            <BurgerMenu />
            <Fragment>
                <section className={` ${styles.notFound}`}>
                    <h1 className={styles["notFound_header"]}>
                        404
                    </h1>
                    <h2 className={styles["notFound_subtitle"]}>
                        Страница не найдена
                    </h2>
                    <p className={styles["notFound_paragraph"]}>
                        Возможно она была удалена или перенесена на другой адресс
                    </p>

                    <NavLink className={styles["notFound_btn"]} to="/music">
                        Вернуться на главную
                    </NavLink>
                </section>
            </Fragment>
            {/* <AudioPlayer /> */}
        </div>
    
        
    )
}

export default NotFound