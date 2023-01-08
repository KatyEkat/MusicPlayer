import { NEXT_TRACK, PREV_TRACK, SET_TRACK, SET_TRACKS } from "./ActionTypes";
import { nextTrackController, prevTrackController } from "./Controllers/Tracks";
import { TRACKS_INITIAL_STATES } from "./InitialState";

export const tracksReducer = (state=TRACKS_INITIAL_STATES, action) => {
    switch(action.type) {
        case SET_TRACKS:
            return {...state, tracks:action.payload}
        case SET_TRACK:
            return {...state, track:action.payload}
        case NEXT_TRACK:
            return nextTrackController(state)
        case PREV_TRACK:
            return prevTrackController(state)
        default:
            return state
    }
}

