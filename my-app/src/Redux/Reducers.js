import { combineReducers } from "redux";
import { tracksReducer } from "./Track/TracksReducer";
import { userReducer } from "./Users/UsersReducer";

export default combineReducers({
    users: userReducer, 
    tracks: tracksReducer
}) 

