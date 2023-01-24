import React, { useState, useEffect, useRef } from "react";
// подсказка какие аргументы передаем  внутрь компонента.
type Props = {
    audioSource: HTMLAudioElement 
}
// аннотация 
export const AudioPlayer = ({audioSource}: Props) => {
    const audio = useRef(audioSource);

    const [volume, setVolume] = useState(audio.current.volume);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        audio.current.addEventListener("durationchange", onDuration);
        audio.current.addEventListener("timeupdate", onProgress);
    }, [])


    const onDuration = (event: Event) => {
        setDuration(event.target.duration);
    }

    const onProgress = (event: Event) => {
        setProgress(event.target.currentTime);
        console.log(event.target.currentTime);
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

    return (
        <div>
            <p style={{color: "white"}}>{progress}/{duration}</p>
            <button onClick={onPlay}>
                Play
            </button>

            <button onClick={onPause}>
                Pause
            </button>

            <p style={{color: "white"}}>{audio.current.volume * 100} </p>

            <button onClick={onUpVolume}> + </button>
            <button onClick={onDownVolume}> - </button>
        </div>
    )
}