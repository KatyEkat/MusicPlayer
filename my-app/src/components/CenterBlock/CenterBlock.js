import React from "react";
import Track from "../Track/Track";
import "./CenterBlock.css";
import { Fragment } from "react";
// import { Container } from 'react';



function CenterBlock() {
  // CenterBlock.propTypes = {
  //   isLoading: bool,
  // }


  // инициализация закрытых пунктов меню Автор
    const [isSearchMenuAuthorOpen, setSearchMenuAuthorOpen] = React.useState(false)
      // инициализация закрытых пунктов меню Жанр
    const [isSearchMenuGenreOpen, setSearchMenuGenreOpen] = React.useState(false)
    // инициализация закрытых пунктов меню год
    const [isSearchMenuYearOpen, setSearchMenuYearOpen] = React.useState(false)

      // автор открыт закрыт
    const toggleBurgerMenuOpen = () => {
        closeAllSearchMenu()
        setSearchMenuAuthorOpen(!isSearchMenuAuthorOpen)
      
        // жанр открыт закрыт
      const toggleSearchMenuGenreOpen = () => {
        closeAllSearchMenu()
        setSearchMenuGenreOpen(!isSearchMenuGenreOpen)
      }

      //Год открыт закрыт
      const toggleSearchMenuYearOpen = () => {
        closeAllSearchMenu()
        setSearchMenuYearOpen(!isSearchMenuYearOpen)
      }
      // полное закрытие меню выбора
      const closeAllSearchMenu = () => {
        setSearchMenuAuthorOpen(false)
        setSearchMenuGenreOpen(false)
        setSearchMenuYearOpen(false)
      }
    }

    return (
        <div className="centerBlock">
          <h2 className="centerBlock__title">Треки</h2>
          <div className="centerBlock__filter">
            <h3 className="centerBlock__filter_title">Искать по:</h3>
            <button className="centerBlock__filter_btn" onClick={toggleBurgerMenuOpen}isOpen={isSearchMenuAuthorOpen}>исполнителю</button>
            {isSearchMenuAuthorOpen && (
              <Fragment>
                <div className="centerBlock__filter-genres">
                  <a>
                    Michael Jackson
                  </a>
                </div>
              </Fragment>
            )}
            {/* <button className="centerBlock__filter_btn" onClick = {toggleSearchMenuYearOpen}
              isOpen={isSearchMenuYearOpen}>году выпуска</button>
              {isSearchMenuYearOpen && (
                <Container>
                  <p>2010</p>
                </Container>
              )} */}

            {/* <button className="centerBlock__filter_btn" onClick={toggleSearchMenuGenreOpen}
              isOpen={isSearchMenuGenreOpen}>жанру</button>
              {isSearchMenuGenreOpen && (
                <Fragment>
                  <div className="centerBlock__filter-genres">
                    <a>Рок</a>
                    <a>Хип-Хоп</a>
                    <a>Поп-музыка</a>
                    <a>Техно</a>
                    <a>Инди</a>
                    <a>Кантри</a>
                  </div>
              </Fragment>
              )} */}
          </div>

          <div className="centerblock__content">
            <div className="centerblock__playlist-title">
                <div className="centerblock__playlist-col col1">Трек</div>
                <div className="centerblock__playlist-col col2">ИСПОЛНИТЕЛЬ</div>
                <div className="centerblock__playlist-col col3">АЛЬБОМ</div>
                <div className="centerblock__playlist-col col4">◴</div>
            </div>
            <div className="centerblock__playlist">
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
              <Track/>
            </div>
          </div>
        </div>  
    )
}

export default CenterBlock;
