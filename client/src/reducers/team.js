import { GET_TEAM, TEAM_ERROR, CLEAR_TEAM } from "../actions/types";

const initialState = {
    team: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_TEAM:
            return {
                ...state,
                team: payload,
                loading: false
            }
        case TEAM_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_TEAM:
            return {
                ...state,
                league: null,
                laoding: false
            }

        default:
            return state;
    }
}