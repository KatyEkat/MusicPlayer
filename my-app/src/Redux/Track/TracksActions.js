import { NEXT_TRACK, PREV_TRACK, SET_TRACK, SET_TRACKS } from "./ActionTypes";


export const setTracks = (payload) => ({
    type:SET_TRACKS,
    payload
})

export const setTrack = (payload) => ({
    type:SET_TRACK,
    payload
})

export const prevTrack = (payload) => ({
    type: PREV_TRACK,
    payload
})

export const nextTrack = (payload) => ({
    type: NEXT_TRACK,
    payload
})