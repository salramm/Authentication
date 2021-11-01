import axios from "axios";
import { setAlert } from "./alert";
import {REGISTER_SUCCESS, REGISTER_FAIL} from './types';

// Register User
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('api/v1/auth/register', body, config );

        dispatch({
            type: REGISTER_SUCCESS, 
            payload: res.data
        })
    } catch (err) {
        const errors = err.response.data.error.split(",");

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
}