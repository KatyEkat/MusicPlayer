import React from 'react'
import styles from './Track.module.css'

const Track = () => {
  return (

      <div className={styles["track"]}>
        <div className={styles["track__title"]}>
          <div className={styles["track__title-image"]}>
            <svg className={styles["track__title-svg"]} alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles["track__title-text"]}>
            <a className={styles["track__title-link"]} href="http://">
              Guilt <span className={styles["track__title-span"]}></span>
            </a>
          </div>
        </div>
        <div className={styles["track__author"]}>
          <a className={styles["track__author-link"]} href="http://">
            Nero
          </a>
        </div>
        <div className={styles["track__album"]}>
          <a className={styles["track__album-link"]} href="http://">
            Welcome Reality
          </a>
        </div>
        <div className={styles["track__time"]}>
          <svg className={styles["track__time-svg"]} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles["track__time-text"]}>4:44</span>
        </div>
      </div>
   
  )
}

export default Track
