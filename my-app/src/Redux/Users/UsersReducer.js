import { SET_USER } from "./ActionTypes";
import { USERS_INITIAL_STATES } from "./InitialState";

export const userReducer = (state=USERS_INITIAL_STATES, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, user:action.payload}
        default:
            return state
    }
}

