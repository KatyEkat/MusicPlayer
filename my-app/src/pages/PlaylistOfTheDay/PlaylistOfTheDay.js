import React, { useEffect } from "react"; 
import moduleStyle from './../../App.module.css';
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Header from "../../components/Header/Header"
import styles from "../PlaylistOfTheDay/PlaylistOfTheDay.module.css";
import Skeleton from "../../components/Skeletons/SkeletonCenterBlock";
import { Fragment } from "react";
import { bool } from 'prop-types';
import Track from "../../components/Track/Track";
// import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";


function PlayListOfTheDay({ isLoading }) { 

    PlayListOfTheDay.propTypes = {
        isLoading: bool,
    }

          // Инициализация скелетона
    const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);

    useEffect(() => {
        setTimeout (() => setIsLoadingSkeleton(false), 1000);
    }, [])

    return ( 
        isLoadingSkeleton ? <Skeleton /> :
        <div className={moduleStyle["App"]}>  
        <Header/>
        
        <section className={styles["main"]}>          
            <BurgerMenu/>
            <Fragment>
                <div className={styles["centerBlock"]}>
                    <h1 className={styles["centerBlock__title"]}>Плейлист дня</h1>

                    <div className={styles["centerblock__content"]}>

                        <div className={styles["centerblock__playlist-title"]}>
                            <div className= {styles['col1']}>Трек</div>
                            <div className={styles["col2"]}>ИСПОЛНИТЕЛЬ</div>
                            <div className={styles["col3"]}>АЛЬБОМ</div>
                            <div className={styles["col4"]}>◴</div>
                        </div>

                        <div className={styles["centerblock__playlist"]}>
                            
                            <Track isLoading={isLoading} />
                            <Track isLoading={isLoading} />
                            <Track isLoading={isLoading} />
                            <Track isLoading={isLoading} />
                            <Track isLoading={isLoading} />
                            <Track isLoading={isLoading} />

                        </div>
                    </div>

                    <div className={styles["audioPlayer"]}>
                        {/* принимает внутрь аудиосорс из аудиоплеера(пропс) */}
                        {/* <AudioPlayer audioSource={new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")}/> */}
                    </div>

                </div>
            </Fragment>
        </section>
        </div>
    )
} 
 
export default PlayListOfTheDay; 