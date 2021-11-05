import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
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
        default:
            return state;
    }
}