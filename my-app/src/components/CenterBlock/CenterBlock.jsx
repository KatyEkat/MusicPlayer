import React from "react";
import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";
import { Fragment } from "react";
import { func, array, object } from 'prop-types';
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { useTheme } from "../../Providers/ThemeProvider";
import { Subtitle } from "../Themes/Subtitle";
import { Buttons } from "../Themes/Buttons";
import { get, post, remove } from "../../Utils/Fetch";
import { connect } from "react-redux";
import { setTracks, setTrack, nextTrack, prevTrack } from "../../Redux/Track/TracksActions";




function CenterBlock({ tracks, setTrack, track, user, nextTrack, prevTrack }) {

    CenterBlock.propTypes = {
        setTracks: func,
        tracks: array,
        track: object,
        nextTrack: func,
        prevTrack:func,
        setTrack:func,
        user:object,
    }

    const {theme} = useTheme()
// инициализация закрытых пунктов меню Автор
    const [isSearchMenuAuthorOpen, setSearchMenuAuthorOpen] =
        React.useState(false)
// инициализация закрытых пунктов меню жанр
    const [isSearchMenuGenreOpen, setSearchMenuGenreOpen] = React.useState(false)
// инициализация закрытых пунктов меню год
    const [isSearchMenuYearOpen, setSearchMenuYearOpen] = React.useState(false)


    const onAddToFavorite = async () => {
        const {error} = await post(`/catalog/track/${track.id}/favorite/`, null, true)
        if (!error) {
            const {json} = await get(`/catalog/track/${track.id}/`)
            setTrack(json)
        }
    }

    const onRemoveFromFavorite = async () => {
        const {error} = await remove(`/catalog/track/${track.id}/favorite/`, null, true)
        if (!error) {
            const {json} = await get(`/catalog/track/${track.id}/`)
            setTrack(json)
        }
    }

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
        console.log(track);
    }



    return (
        // isLoadingSkeleton ? <Skeleton /> :
        <div className={styles["centerBlock"]}>
             
            <div className={styles["centerBlock__filter"]}>
                <Subtitle theme={theme}>Искать по:</Subtitle>
                <div>

                    <Buttons theme={theme} className={styles["centerBlock__filter_btn"]} onClick={toggleBurgerMenuOpen}> исполнителю
                    </Buttons>

                    {isSearchMenuAuthorOpen && (
                        <Fragment>
                            <div className={`${styles.searchMenu} ${styles.searchMenu_Author}`} >
                                <a  className={styles["searchMenuAuthor__item"]}>Michael Jackson</a>
                                <a className={styles["searchMenuAuthor__item"]}>Frank Sinatra</a>
                                <a className={styles["searchMenuAuthor__item"]}>Calvin Harris</a>
                                <a className={styles["searchMenuAuthor__item"]}>Zhu</a>
                                <a className={styles["searchMenuAuthor__item"]}>Arctic Monkeys</a>
                                <a className={styles["searchMenuAuthor__item"]}>Eminem</a>
                            </div>
                        </Fragment>
                    )}
                </div>
                
                <div>
                   
                    <Buttons theme={theme} className={styles["centerBlock__filter_btn"]} onClick={toggleSearchMenuYearOpen}> году выпуска
                    </Buttons>

                    {isSearchMenuYearOpen && (
                        <Fragment>
                            <div className= {`${styles.searchMenu} ${styles.searchMenu_Year}`}>
                                <input
                                    type="radio"
                                    id="yearNewer"
                                    name="year"
                                    value="newer"
                                ></input>
                                <label className={styles["searchMenuAuthor__item"]} htmlFor="yearNewer">
                                    Более новые
                                </label>

                                <input
                                    type="radio"
                                    id="yearOLder"
                                    name="year"
                                    value="older"
                                ></input>
                                <label className={styles["searchMenuAuthor__item"]} htmlFor="yearOlder">
                                    Более старые
                                </label>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div>
                    <Buttons theme={theme} className={styles["centerBlock__filter_btn"]} onClick={toggleSearchMenuGenreOpen}> жанру
                    </Buttons>

                    {isSearchMenuGenreOpen && (
                        <Fragment>
                            <div className= {`${styles.searchMenu} ${styles.searchMenu_Genre}`}>
                                <a className={styles["searchMenuAuthor__item"]}>Рок</a>
                                <a className={styles["searchMenuAuthor__item"]}>Хип-хоп</a>
                                <a className={styles["searchMenuAuthor__item"]}>Поп-музыка</a>
                                <a className={styles["searchMenuAuthor__item"]}>Техно</a>
                                <a className={styles["searchMenuAuthor__item"]}>Инди</a>
                                <a className={styles["searchMenuAuthor__item"]}>Кантри</a>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
            <div className={styles["centerblock__content"]}>
                <div className={styles["centerblock__playlist-title"]}>
                    <div className= {styles['col1']}>Трек</div>
                    <div className={styles["col2"]}>ИСПОЛНИТЕЛЬ</div>
                    <div className={styles["col3"]}>АЛЬБОМ</div>
                    <div className={styles["col4"]}>◴</div>
                </div>
                <div className={styles["centerblock__playlist"]}>
                    {tracks.map(track => <Track key={track.id} track={track} /> )}

                </div>
            </div>
            <div className={styles["audioPlayer"]}>
                
                <AudioPlayer 
                    key={track.track_file} 
                    audioSource={new Audio(track.track_file)}
                    isLiked={track.stared_user.some(u => u.id === user.user_id)}
                    onNext={nextTrack}
                    onPrev={prevTrack}
                    onLike={onAddToFavorite}
                    onDislike={onRemoveFromFavorite}
                />
            </div>
            
        </div>
    )
}

const gatState = (state) => ({
    user: state.users.user,
    track: state.tracks.track,
    tracks: state.tracks.tracks
})

export default connect(gatState, {setTracks, setTrack, nextTrack, prevTrack})(CenterBlock)
