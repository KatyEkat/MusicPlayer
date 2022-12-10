import React from "react";
import  * as styles from "./Login.module.css";
import { Fragment } from "react";
import { Logo } from "../Logo";

function Login () {
    return(
        <Fragment>
            <div className={styles["logIn"]}>
                <Logo/>
                <input className=""></input>
                <input className=""></input>
                <button>Войти</button>
                <button>Зарегистрироваться</button>
            </div>
        </Fragment>
    )
}
export default Login()