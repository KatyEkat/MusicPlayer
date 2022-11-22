import React from "react";
// import logo from 'images/logo.png';

const Navigation = () => {
  return (
    <div>
      <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="/images/logo.png" alt="logo"></img>
        </div>
        
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
