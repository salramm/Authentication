import { GET_TEAM, TEAM_ERROR } from "../actions/types";

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

        default:
            return state;
    }
}