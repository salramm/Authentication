import axios from "axios";
import { setAlert } from "./alert";
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT,
CLEAR_PROFILE,
CLEAR_LEAGUE,
CLEAR_TEAM} from './types';
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/v1/auth/me');


        dispatch({
            type: USER_LOADED,
            payload: res.data // which will be the user to the action type of USER_LOADED
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        })
    };
};


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
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.error.split(",");

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password});

    console.log('hey the error is in the auth - actions')
    try {
        const res = await axios.post('api/v1/auth//login', body, config );

        dispatch({
            type: LOGIN_SUCCESS, 
            payload: res.data
        });

        console.log('hey error in auth - actions')
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.error.split(",");

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout & Clear Profile
export const logout = () => dispatch => {
    dispatch({ type: CLEAR_PROFILE});
    dispatch({ type: CLEAR_LEAGUE});
    dispatch({ type: CLEAR_TEAM});
    dispatch({ type: LOGOUT});
}