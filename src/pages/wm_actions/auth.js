import axios from 'axios';
import { returnErrors } from './messages'
import { LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, USER_LOADED, USER_LOADING } from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING });

    // Get token from state
    const key = getState().auth.key;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `token ${key}`;
    }

    axios.get('https://api.whipafrica.com/v1/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// LOGIN USER
export const login = (email, password) => (dispatch) => {
    // Headers 
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body 
    const body = JSON.stringify({ email, password });

    axios
        .post("https://api.whipafrica.com/v1/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}