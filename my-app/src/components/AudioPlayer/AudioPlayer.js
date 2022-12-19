import React, { useState, useEffect, useRef } from "react";
// подсказка какие аргументы передаем  внутрь компонента.
type Props = {
    audioSource: HTMLAudioElement 
}
// аннотация 
export const AudioPlayer = ({audioSource}: Props) => {
    const audio = useRef(audioSource);

    const [loop, setLoop] = useState(false);

    const [volume, setVolume] = useState(audio.current.volume);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        audio.current.addEventListener("durationchange", onDuration);
        audio.current.addEventListener("timeupdate", onProgress);
        audio.current.addEventListener("volumechange", onVolume);

        return () => {   
            audio.current.removeEventListener("durationchange", onDuration);
            audio.current.removeEventListener("timeupdate", onProgress);
            audio.current.removeEventListener("volumechange", onVolume);
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

    return (
        <div>
            <p style={{color: "white"}}>{progress}/{duration}</p>
            <button onClick={onPlay}>
                Play
            </button>

            <button onClick={onPause}>
                Pause
            </button>

            <p style={{color: "white"}}>{volume * 100} </p>

            <input type={"range"} step={1} min={0} max={duration} onChange={onProgressInput} value={progress}></input>

            <button onClick={onUpVolume}> + </button>
            <button onClick={onDownVolume}> - </button>
            <button onClick={onLoop}>{loop ? "отменить повтор" : "Повтор"}</button>
        </div>
    )
}