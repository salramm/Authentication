import axios from "axios";
import { setAlert } from "./alert";
import { GET_LEAGUE, LEAGUE_ERROR } from "./types"
import setAuthToken from "../utils/setAuthToken";


// Get current user league

export const getCurrentLeague = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get(`/api/v1/leagues/`)

        console.log(res.data)

        dispatch ({
            type: GET_LEAGUE,
            payload: res.data
        })

    } catch (err) {
        dispatch ({
            type: LEAGUE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
        
    }
}

// Create or update a league

export const createLeague = (formData, history, edit=false) => async dispatch => {
    try {
        
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const res = await axios.post('/api/v1/leagues', formData, config);

        dispatch ({
            type: GET_LEAGUE,
            payload: res.data
        })

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'))

        if (!edit) {
            history.push('/dashboard')
        }


    } catch (err) {
        const errors = err.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch ({
            type: LEAGUE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}