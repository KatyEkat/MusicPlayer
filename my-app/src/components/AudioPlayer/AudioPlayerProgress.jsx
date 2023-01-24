import React, { useState, useEffect } from "react";
import styles from "./AudioPlayer.module.css";
import { number, object } from "prop-types";

export const AudioPlayerProgress = ({duration, audio}) => {
    AudioPlayerProgress.propTypes={
        duration:number,
        audio:object
    }

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        audio.current.addEventListener("timeupdate", onProgress);

        return () => {   
            audio.current.removeEventListener("timeupdate", onProgress);
        }
    }, [audio])

    const onProgress = (event: Event) => {
        setProgress(event.target.currentTime);
        // console.log(event.target.currentTime);
        // console.log(audio);
    }

    const onProgressInput = (event: Event) => {
        audio.current.currentTime=parseInt(event.target.value);
        console.log(audio.current.currentTime);
    }


    return <div>
                <input className={styles["music_progress"]} type={"range"} step={1} min={0} max={duration} onChange={onProgressInput} value={progress}></input>
            </div>
}