import React, { useState, useEffect, useRef } from "react";
import styles from "./AudioPlayer.module.css";


// подсказка какие аргументы передаем  внутрь компонента.
type Props = {
    audioSource: HTMLAudioElement 
}
// аннотация 
export const AudioPlayer = ({audioSource}: Props) => {
    const audio = useRef(audioSource);

    const [loop, setLoop] = useState(false);
    // const [play, setPlay] = useState(false);

    const [volume, setVolume] = useState(audio.current.volume);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        audio.current.addEventListener("durationchange", onDuration);
        audio.current.addEventListener("timeupdate", onProgress);
        audio.current.addEventListener("volumechange", onVolume);
        // audio.current.addEventListener("play", onPlay);
        // audio.current.addEventListener("pause", onPause);

        return () => {   
            audio.current.removeEventListener("durationchange", onDuration);
            audio.current.removeEventListener("timeupdate", onProgress);
            audio.current.removeEventListener("volumechange", onVolume);
            // audio.current.removeEventListener("play", onPlay);
            // audio.current.removeEventListener("pause", onPause);
        }
    }, [])


    const onDuration = (event: Event) => {
        setDuration(event.target.duration);
    }

    const onProgress = (event: Event) => {
        setProgress(event.target.currentTime);
        console.log(event.target.currentTime);
    }

    const onProgressInput = (event: Event) => {
        audio.current.currentTime=event.target.value;
    }

    const onVolume = (event: Event) => {
        setVolume(event.target.volume);
    }

    const onPlay = () => {
        audio.current.play()
    }
    
    const onPause = () => {
        audio.current.pause()
    }

    const onUpVolume = () => {
        audio.current.volume = audio.current.volume + 0.1;
    }

    const onDownVolume = () => {
        audio.current.volume = audio.current.volume - 0.1;
    }

    const onLoop = () => {
        audio.current.loop=!loop;
        setLoop(!loop);
    }
    // const setPlay = () => {
    //     audio.current.play=!play;
    //     setPlay(!play)
    // }

    return (
        <div>
            <input className={styles["music_progress"]} type={"range"} step={1} min={0} max={duration} onChange={onProgressInput} value={progress}></input>

            {/* <p style={{color: "white"}}>{progress}/{duration}</p> */}
            <button className={styles["play_btn"]} onClick={onPlay} >  </button>
            <button className={styles["pause_btn"]} onClick={onPause} /> 
            {/* <button  className={styles["play_btn"]}>{ play ? {onPlay} : {onPause} } </button> */}

            <p style={{color: "white"}}>{volume * 100} </p>
            {/* <input  type="range" min="0" max="100" value="50" className="range" step="1"> {volume * 100} </input> */}
            {/* <input type="range" className="slider"> {volume * 100} </input> */}

            <button className={styles["loop"]} onClick={onLoop}>{loop ? "отменить повтор" : "Повтор"}</button>


            <button style={{color: "white"}} onClick={onUpVolume}> + </button>
            <button  style={{color: "white"}} onClick={onDownVolume}> - </button>
            {/* <input type="range" name="range">  </input> */}

        </div>
    )
}