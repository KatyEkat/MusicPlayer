import React from "react";
import styles from "./Login.module.css";
import { Fragment } from "react";
import LogoDark from "../../components/LogoDark/LogoDark";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import stylesApp from "../../App.module.css";
// import { BASE_URL } from "../../Consts/API";

function Login () {
    const history = useHistory();

    const onRegistration = () => {
        history.push("/registration")
    }

    const onMusic = () => {
        localStorage.setItem("token", 2)
        history.push("/music")

        //Логин/пароль позже перенести в отдельный файл
        // fetch(BASE_URL+"/user/token/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "email": "root@mepwmeow.com",
        //         "password": "123456789Az"
        //     })
        // })
    }
    
    return(
        <Fragment>
            <div className={` ${stylesApp.App} ${styles.background}`}>
                <div className={styles["logIn"]}>
                    <LogoDark/>
                    <input className={styles["login_input"]} placeholder="Логин"></input>
                    <input className={styles["login_input"]} placeholder="Пароль"></input>
                    <button className={styles["login_btn"]} onClick = {onMusic}>Войти</button>
                    <button className={styles["register_btn"]} onClick = {onRegistration} >Зарегистрироваться</button>
                    {/* <Link to={"/registration"} >Зарегистрироваться</Link> */}
                </div>
                
            </div>
        </Fragment>
    )
}
export default Login