import axios from 'axios'
import { setAlert } from './alert' 
import { GET_TEAM, TEAM_ERROR } from './types'
import setAuthToken from '../utils/setAuthToken'


// Create or update a league
export const createTeam = (formData, history, edit=false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/v1/teams', formData, config );

        dispatch ({
            type: GET_TEAM,
            payload: res.data
        })

        dispatch(setAlert(edit ? 'Team Updated' : 'Team Created', 'success' ))

        if (!edit) {
            history.push('/dashboard')
        }

    } catch (err) {
        const errors = err.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch ({
            type: TEAM_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
        
    }
}