// import React, {useEffect} from "react";
import React from "react";
import Track from "../Track/Track";
import "./CenterBlock.css";
import { Fragment } from "react";
import { bool } from 'prop-types';
// import ContentLoader from "react-content-loader";
// import Skeleton from "../../Skeletons/SkeletonCenterBlock";
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";


function CenterBlock({ isLoading }) {
    CenterBlock.propTypes = {
        isLoading: bool,
    }
// инициализация закрытых пунктов меню Автор
    const [isSearchMenuAuthorOpen, setSearchMenuAuthorOpen] =
        React.useState(false)
// инициализация закрытых пунктов меню жанр
    const [isSearchMenuGenreOpen, setSearchMenuGenreOpen] = React.useState(false)
// инициализация закрытых пунктов меню год
    const [isSearchMenuYearOpen, setSearchMenuYearOpen] = React.useState(false)

    // год открыт закрыт
    const toggleSearchMenuYearOpen = () => {
        closeAllSearchMenu()
        setSearchMenuYearOpen(!isSearchMenuYearOpen)
    }

    // автор открыт закрыт
    const toggleBurgerMenuOpen = () => {
        closeAllSearchMenu()
        setSearchMenuAuthorOpen(!isSearchMenuAuthorOpen)
    }

    // жанр открыт закрыт
    const toggleSearchMenuGenreOpen = () => {
        closeAllSearchMenu()
        setSearchMenuGenreOpen(!isSearchMenuGenreOpen)
    }

    // закрыть все пункты меню
    const closeAllSearchMenu = () => {
        setSearchMenuAuthorOpen(false)
        setSearchMenuGenreOpen(false)
        setSearchMenuYearOpen(false)
    }


    return (
        // isLoadingSkeleton ? <Skeleton /> :
        <div className="centerBlock">
            <h2 className="centerBlock__title">Треки</h2>
            <div className="centerBlock__filter">
                <h3 className="centerBlock__filter_title">Искать по:</h3>
                <div>
                    <button
                        className="centerBlock__filter_btn"
                        onClick={toggleBurgerMenuOpen}
                    >
                        исполнителю
                    </button>
                    {isSearchMenuAuthorOpen && (
                        <Fragment>
                            <div className="searchMenu searchMenu_Author">
                                <a className="searchMenuAuthor__item">Michael Jackson</a>
                                <a className="searchMenuAuthor__item">Frank Sinatra</a>
                                <a className="searchMenuAuthor__item">Calvin Harris</a>
                                <a className="searchMenuAuthor__item">Zhu</a>
                                <a className="searchMenuAuthor__item">Arctic Monkeys</a>
                                <a className="searchMenuAuthor__item">Eminem</a>
                            </div>
                        </Fragment>
                    )}
                </div>
                
                <div>
                    <button
                        className="centerBlock__filter_btn"
                        onClick={toggleSearchMenuYearOpen}
                    >
                        году выпуска
                    </button>
                    {isSearchMenuYearOpen && (
                        <Fragment>
                            <div className="searchMenu searchMenu_Year">
                                <input
                                    type="radio"
                                    id="yearNewer"
                                    name="year"
                                    value="newer"
                                ></input>
                                <label className="searchMenuAuthor__item" htmlFor="yearNewer">
                                    Более новые
                                </label>

                                <input
                                    type="radio"
                                    id="yearOLder"
                                    name="year"
                                    value="older"
                                ></input>
                                <label className="searchMenuAuthor__item" htmlFor="yearOlder">
                                    Более старые
                                </label>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div>
                    <button
                        className="centerBlock__filter_btn"
                        onClick={toggleSearchMenuGenreOpen}
                    >
                        жанру
                    </button>
                    {isSearchMenuGenreOpen && (
                        <Fragment>
                            <div className="searchMenu searchMenu_Genre">
                                <a className="searchMenuAuthor__item">Рок</a>
                                <a className="searchMenuAuthor__item">Хип-хоп</a>
                                <a className="searchMenuAuthor__item">Поп-музыка</a>
                                <a className="searchMenuAuthor__item">Техно</a>
                                <a className="searchMenuAuthor__item">Инди</a>
                                <a className="searchMenuAuthor__item">Кантри</a>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
            <div className="centerblock__content">
                <div className="centerblock__playlist-title">
                    <div className="centerblock__playlist-col col1">Трек</div>
                    <div className="centerblock__playlist-col col2">ИСПОЛНИТЕЛЬ</div>
                    <div className="centerblock__playlist-col col3">АЛЬБОМ</div>
                    <div className="centerblock__playlist-col col4">◴</div>
                </div>
                <div className="centerblock__playlist">
                    
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                    <Track isLoading={isLoading} />
                </div>
            </div>
            <div className="audioPlayer">
            {/* принимает внутрь аудиосорс из аудиоплеера(пропс) */}
            <AudioPlayer audioSource={new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")}/>
            </div>
            
        </div>
    )
}


export default CenterBlock
