import React from "react";
import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";
import { func, array, object, bool } from 'prop-types';
import { AudioPlayer } from "../AudioPlayer/AudioPlayer";
import { get, post, remove} from "../../Utils/Fetch";
import { connect } from "react-redux";
import { setTracks, setTrack, nextTrack, prevTrack } from "../../Redux/Track/TracksActions";
import CenterBlockFilters from "./CenterBlockFilters";


function CenterBlock({ tracks, setTrack, track, user, nextTrack, prevTrack, filteredTracks, allowFilter }) {

    CenterBlock.propTypes = {
        setTracks: func,
        tracks: array,
        track: object,
        nextTrack: func,
        prevTrack:func,
        setTrack:func,
        user:object,
        filteredTracks: array,
        allowFilter: bool
    }


    const onAddToFavorite = async () => {
        const {error} = await post(`/catalog/track/${track.id}/favorite/`, null, true)
        if (!error) {
            const {json} = await get(`/catalog/track/${track.id}/`)
            setTrack(json)
        }
    }

    const onRemoveFromFavorite = async () => {
        const {error} = await remove(`/catalog/track/${track.id}/favorite/`, null, true)
        if (!error) {
            const {json} = await get(`/catalog/track/${track.id}/`)
            setTrack(json)
        }
    }

    return (
        // isLoadingSkeleton ? <Skeleton /> :
        <div className={styles["centerBlock"]}>
            {allowFilter && <CenterBlockFilters/>}
            <div className={styles["centerblock__content"]}>
                <div className={styles["centerblock__playlist-title"]}>
                    <div className= {styles['col1']}>Трек</div>
                    <div className={styles["col2"]}>ИСПОЛНИТЕЛЬ</div>
                    <div className={styles["col3"]}>АЛЬБОМ</div>
                    <div className={styles["col4"]}>◴</div>
                </div>
                <div className={styles["centerblock__playlist"]}>
                    {(allowFilter ? filteredTracks : tracks).map(track => <Track key={track.id} track={track} /> )}

                </div>
            </div>
            <div className={styles["audioPlayer"]}>
                
                <AudioPlayer 
                    key={track.track_file} 
                    audioSource={new Audio(track.track_file)}
                    isLiked={track.stared_user.some(u => u.id === user.user_id)}
                    onNext={nextTrack}
                    onPrev={prevTrack}
                    onLike={onAddToFavorite}
                    onDislike={onRemoveFromFavorite}
                />
            </div>
            
        </div>
    )
}

const gatState = (state) => ({
    user: state.users.user,
    track: state.tracks.track,
    tracks: state.tracks.tracks,
    filteredTracks: state.tracks.filteredTracks
})

export default connect(gatState, {setTracks, setTrack, nextTrack, prevTrack})(CenterBlock)
