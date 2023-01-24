import React from 'react'
import './Track.css'

const Track = () => {
  return (

      <div className="track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              Guilt <span className="track__title-span"></span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            Nero
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            Welcome Reality
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">4:44</span>
        </div>
      </div>
   
  )
}

export default Track
