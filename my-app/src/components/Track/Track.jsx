import React from 'react'
import styles from './Track.module.css'
import { object, func } from 'prop-types';
import { connect } from "react-redux";
import { setTrack } from '../../Redux/Track/TracksActions';

const Track = ({track, setTrack}) => {

  Track.propTypes={
    track: object,
    setTrack: func
  }

  const onSelectTrack = () => {
    setTrack(track)
  }


  return (

      <div className={styles["track"]} onClick={onSelectTrack}>
        <div className={styles["track__title"]}>
          <div className={styles["track__title-image"]}>

            <img className={styles["track__title-svg"]} src= {track.logo} />
          </div>

          <div className={styles["track__title-text"]}>
            <a className={styles["track__title-link"]} href="http://">
              {track.name} <span className={styles["track__title-span"]}></span>
            </a>
          </div>
        </div>
        <div className={styles["track__author"]}>
          <a className={styles["track__author-link"]} href="http://">
            {track.author}
          </a>
        </div>
        <div className={styles["track__album"]}>
          <a className={styles["track__album-link"]} href="http://">
            {track.album}
          </a>
        </div>
        <div className={styles["track__time"]}>
          <svg className={styles["track__time-svg"]} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles["track__time-text"]}>{track.duration_in_seconds}</span>
        </div>
      </div>
   
  )
}

export default connect(null, {setTrack})(Track)
