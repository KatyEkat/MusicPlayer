import { SET_TRACKS } from "./ActionTypes";
import { TRACKS_INITIAL_STATES } from "./InitialState";

export const tracksReducer = (state=TRACKS_INITIAL_STATES, action) => {
    console.log(action);
    switch(action.type) {
        case SET_TRACKS:
            return {...state, tracks:action.payload}
        default:
            return state
    }
}