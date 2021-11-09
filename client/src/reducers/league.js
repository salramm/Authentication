import { GET_LEAGUE, LEAGUE_ERROR, CLEAR_LEAGUE } from "../actions/types";


const initialState = {
    league: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_LEAGUE:
            return {
                ...state,
                league: payload,
                loading: false,
            }

        case LEAGUE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        case CLEAR_LEAGUE:
            return {
                ...state,
                league: null,
                laoding: false
            }

        default:
            return state;
    }

}