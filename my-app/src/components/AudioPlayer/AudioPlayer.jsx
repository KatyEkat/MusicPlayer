import React, { useState, useEffect, useRef } from "react";
import styles from "./AudioPlayer.module.css";
import { AudioPlayerProgress } from "./AudioPlayerProgress";
// import { AudioPlayerTheme } from "../Themes/AudioPlayerTheme";
// import { useTheme } from "../../Providers/ThemeProvider";


// подсказка какие аргументы передаем  внутрь компонента.
type Props = {
    audioSource: HTMLAudioElement;
    onNext: () => void;
    onPrev: () => void;
}

// аннотация 
export const AudioPlayer = ({audioSource, onNext, onPrev}: Props) => {

    
    const audio = useRef(audioSource);

    const [loop, setLoop] = useState(false);
    const [isPlaying, setIsPlaying]  = useState(false);


    const [volume, setVolume] = useState(audio.current.volume);
    const [duration, setDuration] = useState(0);

        console.log("render");
    useEffect(() => {
        setIsPlaying(true);
        audio.current.autoplay=true;
        audio.current.addEventListener("durationchange", onDuration);
        audio.current.addEventListener("volumechange", onVolume);


        return () => {   
            audio.current.pause();
            audio.current.removeEventListener("durationchange", onDuration);
            audio.current.removeEventListener("volumechange", onVolume);
        }
    }, [])


    const onDuration = (event: Event) => {
        setDuration(event.target.duration);
    }

    const onVolume = (event: Event) => {
        setVolume(event.target.volume);
    }
    const onVolumeInput = (event: Event) => {
        audio.current.volume = event.target.value;
    }

    const onPlay = async () => {
        await audio.current.play();
        setIsPlaying (true);
    }
    
    const onPause = () => {
        audio.current.pause();
        setIsPlaying(false);
    }


    const onLoop = () => {
        audio.current.loop=!loop;
        setLoop(!loop);
    }

    // const {theme} = useTheme()

    return (
    //    <AudioPlayerTheme theme={theme}>
            <div>
                <AudioPlayerProgress duration={duration} audio = {audio}/>

                <div  className={styles["audio_player_styles"]}>
                    
                    <button className={styles["previous_track"]} onClick={onPrev}> </button>
                    {
                        isPlaying
                            ? <button className={styles["pause_btn"]} onClick={onPause} /> 
                            : <button className={styles["play_btn"]} onClick={onPlay} />
                    }
                    
                    <button className={styles["next_track"]} onClick={onNext}> </button>

                    

                    <button className={loop ? styles["loop_active"] : styles["loop"]} onClick={onLoop}  />

                    <button className={styles["shuffle_track"]}> </button>
                    <button className={styles["like_btn"]}> </button>
                    <button className={styles["dislike_btn"]}> </button>

                    <p style={{color: "grey"}}>{volume * 100} </p>
                    
                    <input className={styles["volume_btn"]} type="range" min={0} max={1} step={0.1} onChange={onVolumeInput}/>

                </div>
            </div>
    //    </AudioPlayerTheme>
    )
}