import React from "react";

import Track from "../Track/Track";
import "./CenterBlock.css";

function CenterBlock() {
    return (
        <div className="centerBlock">
          <h2 className="centeBlock__title">Треки</h2>
          <div className="centerBlock__filter">
            <h3 className="centerBlock__filter_title">Искать по:</h3>
            <button className="centerBlock__filter_btn">исполнителю</button>
            <button className="centerBlock__filter_btn">году выпуска</button>
            <button className="centerBlock__filter_btn">жанру</button>
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
