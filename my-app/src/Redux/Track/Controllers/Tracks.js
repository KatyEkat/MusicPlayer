export const nextTrackController = (state) => {
    const {track, tracks} = state

    const trackIndex = tracks.findIndex(t => t.id === track.id)
    const nextTrack = tracks[trackIndex + 1]

    return nextTrack === undefined ? state : {...state, track: nextTrack}
}

export const prevTrackController = (state) => {
    const {track, tracks} = state

    const trackIndex = tracks.findIndex(t => t.id === track.id)
    const prevTrack = tracks[trackIndex - 1]

    return prevTrack === undefined ? state : {...state, track: prevTrack}
}