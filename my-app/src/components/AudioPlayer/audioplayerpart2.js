// // import React, { useState, useEffect, useMemo } from "react";
// // import styles from "./AudioPlayer.module.css";


// // подсказка какие аргументы передаем  внутрь компонента.
// type Props = {
//     audioSource: string 
// }
// // аннотация 
// export const AudioPlayer = ({audioSource}: Props) => {
//     // const audio = useRef(audioSource);
//     const audio = useMemo(() => new Audio(audioSource), [audioSource]) 

//     const [loop, setLoop] = useState(false);
//     const [isPlaying, setIsPlaying]  = useState(false);


//     const [volume, setVolume] = useState(audio.volume);
//     const [duration, setDuration] = useState(0);
//     const [progress, setProgress] = useState(0);

// //     useEffect(() => {
// //         document.body.appendChild(audioSource);
// // }, [audioSource])

//     useEffect(() => {
//         setIsPlaying(true);
//         audio.autoplay = true;
//         audio.addEventListener("durationchange", onDuration);
//         audio.addEventListener("timeupdate", onProgress);
//         audio.addEventListener("volumechange", onVolume);


//         return () => {   
//             audio.pause();
//             audio.removeEventListener("durationchange", onDuration);
//             audio.removeEventListener("timeupdate", onProgress);
//             audio.removeEventListener("volumechange", onVolume);

//         }
//     }, [])


//     const onDuration = (event: Event) => {
//         setDuration(event.target.duration);
//     }

//     const onProgress = (event: Event) => {
//         setProgress(event.target.currentTime);
//         console.log(event.target.currentTime);
//     }

//     const onProgressInput = (event: Event) => {
//         audio.currentTime=event.target.value;

//     }

//     const onVolume = (event: Event) => {
//         setVolume(event.target.volume);
//     }
//     const onVolumeInput = (event: Event) => {
//         audio.volume = event.target.value;
//     }

//     const onPlay = async () => {
//         audio.load();
//         await audio.play();
//         setIsPlaying (true);
//     }

    
//     const onPause = () => {
//         audio.pause();
//         setIsPlaying(false);
//     }


//     const onLoop = () => {
//         audio.loop=!loop;
//         setLoop(!loop);
//     }



//     return (
//         <div>
//             <input className={styles["music_progress"]} type={"range"} step={1} min={0} max={duration} onChange={onProgressInput} value={progress}></input>
//             {/* Тайминг проигрывания музыки */}
//             {/* <p style={{color: "white"}}>{progress}/{duration}</p> */}


//             <div  className={styles["audio_player_styles"]}>
                
//                 <button className={styles["previous_track"]}> </button>
//                 {
//                     isPlaying
//                         ? <button className={styles["pause_btn"]} onClick={onPause} /> 
//                         : <button className={styles["play_btn"]} onClick={onPlay} />
//                 }
                
//                 <button className={styles["next_track"]}> </button>

                

//                 <button className={loop ? styles["loop_active"] : styles["loop"]} onClick={onLoop}  />

//                 <button className={styles["shuffle_track"]}> </button>
//                 <button className={styles["like_btn"]}> </button>
//                 <button className={styles["dislike_btn"]}> </button>

//                 <p style={{color: "grey"}}>{volume * 100} </p>
                
//                 <input className={styles["volume_btn"]} type="range" min={0} max={1} step={0.1} onChange={onVolumeInput}/>

//             </div>
//         </div>
//     )
// }