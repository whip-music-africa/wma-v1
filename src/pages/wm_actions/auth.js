import axios from 'axios';
import { returnErrors } from './messages'
import { LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, USER_LOADED, USER_LOADING, REGISTER_FAIL, REGISTER_SUCCESS } from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading
    dispatch({ type: USER_LOADING });

    // Get token from state
    const key = getState().auth.key;
    console.log(key);

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };

    axios
        .get("https://api.whipafrica.com/v1/users/me/", config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
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
        .post("https://api.whipafrica.com/v1/auth/login/", body, config)
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
// REGISTER USER
export const register = ({ email, name, country, password1, password2 }) => dispatch => {

    // Headers 
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body 
    const body = JSON.stringify({ email, name, country, password1, password2 });

    axios
        .post("https://api.whipafrica.com/v1/auth/registration/", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// PATCH UPDATE THE PROFILE PROFESSION 
// export const profession = ({profession, genre});

// axios
//     .patch("https://api.whipafrica.com/v1/")