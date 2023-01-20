import React, {Fragment} from "react";
import styles from "./CenterBlock.module.css";
import { Subtitle } from "../Themes/Subtitle";
import { Buttons } from "../Themes/Buttons";
import { useTheme } from "../../Providers/ThemeProvider";
import { connect } from "react-redux";
import { useMemo } from "react";
import { array, func } from 'prop-types';
import { setFilteredTracks } from "../../Redux/Track/TracksActions";
import { useEffect } from "react";
import { onlyUnique } from "../../Utils/Utils";


const CenterBlockFilters = ({ tracks, setFilteredTracks, filteredTracks }) => {

    CenterBlockFilters.propTypes = {
        tracks: array,
        setFilteredTracks: func,
        filteredTracks: array
    }

    const {theme} = useTheme()
    const [sortBy, setSortBy] = React.useState("desc")
    const [filters, setFilters] = React.useState({author:null, genre:null})

    const [isSearchMenuAuthorOpen, setSearchMenuAuthorOpen] =
        React.useState(false)
    const [isSearchMenuGenreOpen, setSearchMenuGenreOpen] = React.useState(false)
    const [isSearchMenuYearOpen, setSearchMenuYearOpen] = React.useState(false)


    const authorsList = useMemo(() => tracks.map(track => track.author).filter(onlyUnique), [tracks])
    const genresList = useMemo(() => tracks.map(track => track.genre).filter(onlyUnique), [tracks])

    useEffect(() => {
        filterTracks()
    }, [filters, tracks])

    useEffect(() => {
        sortTracks()
    }, [sortBy])


    const sortTracks = () => {
        const filteredTracksCopy = [...filteredTracks]

        if(filteredTracks.length === 0) {
            return
        }
        
        if (sortBy === "desc" ) {
            setFilteredTracks(filteredTracksCopy.sort(function(a,b){
                return new Date(b.release_date) - new Date(a.release_date);
            }))
        }
        if (sortBy === "asc" ) {
            setFilteredTracks(filteredTracksCopy.reverse(function(a,b){
                return new Date(b.release_date) - new Date(a.release_date);
            }))
        }
    }
    

    const filterTracks = () => {
        if (filters.author) {
            setFilteredTracks(tracks.filter(track => track.author === filters.author))
        }
        
        if (filters.genre) {
            setFilteredTracks(tracks.filter(track => track.genre === filters.genre))
        }

        if (filters.author === null && filters.genre === null ) {
            setFilteredTracks(tracks)
        }
    }

    const onAuthor = (author) => () => {
        setFilters({author, genre:null})
    }

    const onGenre = (genre) => () => {
        setFilters({genre, author:null})
    }

    const onSort = (sort) => () => {
        setSortBy(sort)
    }
    

    const toggleSearchMenuYearOpen = () => {
        closeAllSearchMenu()
        setSearchMenuYearOpen(!isSearchMenuYearOpen)
    }

    const toggleBurgerMenuOpen = () => {
        closeAllSearchMenu()
        setSearchMenuAuthorOpen(!isSearchMenuAuthorOpen)
    }

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

    return(
        <div className={styles["centerBlock__filter"]}>
            <Subtitle theme={theme}>Искать по:</Subtitle>

            <div>

                <Buttons theme={theme} className={styles["centerBlock__filter_btn"]} onClick={toggleBurgerMenuOpen}> исполнителю
                </Buttons>

                    {isSearchMenuAuthorOpen && (
                        <Fragment>
                            <div className={`${styles.searchMenu} ${styles.searchMenu_Author}`} >
                                {authorsList.map((author, index) => <a key={index} className={styles["searchMenuAuthor__item"]} onClick={onAuthor(author)}>{author}</a>)}
                                
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
                                value={sortBy}
                                onClick={onSort("desc")}
                            ></input>
                            <label className={styles["searchMenuAuthor__item"]} htmlFor="yearNewer">
                                Более новые
                            </label>

                            <input
                                type="radio"
                                id="yearOLder"
                                name="year"
                                value={sortBy}
                                onClick={onSort("asc")}
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
                            {genresList.map((genre, index) => <a key={index} className={styles["searchMenuAuthor__item"]} onClick={onGenre(genre)}>{genre}</a> )}

                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

const getState = (state) => ({
    tracks: state.tracks.tracks,
    filteredTracks: state.tracks.filteredTracks 
})

export default connect(getState, {setFilteredTracks})(CenterBlockFilters)
