import { combineReducers } from "redux";
import { tracksReducer } from "./Track/TracksReducer";

export default combineReducers({
    tracks: tracksReducer
}) 