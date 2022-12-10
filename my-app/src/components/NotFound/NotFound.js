import React from "react";
import "./notFound.css";
import "../BurgerMenu"
import "../Header"

function Error () {
    return(
        <div className="notFound">
            <h1 className="notFound_header">
                404
            </h1>
            <h2 className="notFound_subtitle">
                Страница не найдена
            </h2>
            <p className="notFound_paragraph">
                Возможно она была удалена или перенесена на другой адресс
            </p>

            <button className="notFound_btn">
                Вернуться на главную
            </button>
        </div>
    )
}

export default Error()