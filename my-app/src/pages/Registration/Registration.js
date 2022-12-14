import React from "react";
import styles from "./Registration.module.css";
import stylesApp from "../../App.module.css";
import { Fragment } from "react";
import LogoDark from "../../components/LogoDark/LogoDark";
import { useHistory } from "react-router-dom";

function Registration () {
    const history = useHistory();

    const onLogin = () => {
        history.push("/login")
    }
    return(
        <Fragment>
           <div className={` ${stylesApp.App} ${styles.background}`}>
             <div className={styles["logIn"]}>
                <LogoDark/>
                <input className={styles["login_input"]} placeholder="Логин"></input>
                <input className={styles["login_input"]} placeholder="Пароль"></input>
                <input className={styles["login_input"]} placeholder="Повторите пароль"></input>
                <button className={styles["registration_btn"]} onClick = {onLogin}>Зарегистрироваться</button>
            </div>
           </div>
        </Fragment>
    )
}
export default Registration

// import React from "react";

// function Login () {
//     const history = useHistory();

//     const onRegistration = () => {
//         history.push("/registration")
//     }

//     const onMusic = () => {
//         history.push("/music")
//     }
    
//     return(
//         <Fragment>
//             <div className={` ${stylesApp.App} ${styles.background}`}>
//                 <div className={styles["logIn"]}>
//                     <LogoDark/>
//                     <input className={styles["login_input"]} placeholder="Логин"></input>
//                     <input className={styles["login_input"]} placeholder="Пароль"></input>
//                     <button className={styles["login_btn"]} onClick = {onMusic}>Войти</button>
//                     <button className={styles["register_btn"]} onClick = {onRegistration} >Зарегистрироваться</button>
//                     {/* <Link to={"/registration"} >Зарегистрироваться</Link> */}
//                 </div>
                
//             </div>
//         </Fragment>
//     )
// }
// export default Login