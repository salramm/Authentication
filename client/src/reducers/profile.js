import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    league: [],
    laoding: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                laoding: false
            }
        case PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                laoding: false
            }
        case CLEAR_PROFILE:
            return{
                ...state,
                profile: null,
                repos: [],
                laoding: false
            }
        default:
            return state;
    }
}