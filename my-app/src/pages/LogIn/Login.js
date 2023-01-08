import React, {useState} from "react";
import styles from "./Login.module.css";
import { Fragment } from "react";

// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import stylesApp from "../../App.module.css";
import { post } from "../../Utils/Fetch";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../Consts/Backups";
import Logo from "../../components/Logo/Logo";
// import { BASE_URL } from "../../Consts/API";

function Login () {
    const history = useHistory();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");


    const onRegistration = () => {
        history.push("/registration")
    }

    const onMusic = async () => {
        const {code, json} = await post("/user/token/", {email, password});
        if (code===200) {
            localStorage.setItem(REFRESH_TOKEN, json.refresh)
            localStorage.setItem(ACCESS_TOKEN, json.access)
            history.push("/music")
        } 
    }
    
    return(
        <Fragment>
            <div className={` ${stylesApp.App} ${styles.background}`}>
                <div className={styles["logIn"]}>
                    <Logo/>
                    <input 
                        value={email} 
                        onChange={event=> setEmail(event.target.value)}
                        className={styles["login_input"]} 
                        placeholder="Электронная адресс">
                    </input>

                    <input 
                        value={password} 
                        onChange={event=> setPassword(event.target.value)}
                        className={styles["login_input"]} 
                        placeholder="Пароль">
                    </input>

                    <button className={styles["login_btn"]} onClick = {onMusic}>Войти</button>
                    <button className={styles["register_btn"]} onClick = {onRegistration} >Зарегистрироваться</button>
                    {/* <Link to={"/registration"} >Зарегистрироваться</Link> */}
                </div>
                
            </div>
        </Fragment>
    )
}
export default Login