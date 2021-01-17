import axios from 'axios';
import { professionConstants } from '../wm_constants';
import { returnErrors } from './messages'
import { GENRE_UPDATED, GENRE_UPDATE_FAIL, PROFESSION_UPDATED, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, USER_LOADED, USER_LOADING, REGISTER_FAIL, REGISTER_SUCCESS, PROFESSION_UPDATE_FAIL } from './types';

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
        config.headers["Authorization"] = `Token ${key}`
    };

    axios
        .get("https://api.whipafrica.com/v1/users/me/", config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data.results
            });
            console.log(res.data.results)
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}
// // GET USER ID
// export const loadId = () => (dispatch, getState) => {
//     dispatch({type: USER_LOADING})
// }

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
    console.log("https://api.whipafrica.com/v1/auth/login/", body, config)
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
            console.log(err.response)
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
export const professionUpdateCall = (profession) => (dispatch, getState) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const key = getState().auth.key;
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };
    const user = getState().auth.users
    const body = { profession }
    console.log(user, body, config)
    axios
        .patch(user, body, config)
        .then(res => {
            dispatch({
                type: PROFESSION_UPDATED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: PROFESSION_UPDATE_FAIL
            })
        })
}
// PATCH UPDATE THE PROFILE GENRE
export const genreUpdateCall = (genre) => (dispatch, getState) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    const key = getState().auth.key;
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };
    const user = getState().auth.users
    const body = { genre }
    console.log(user, body, config)
    axios
        .patch(user, body, config)
        .then(res => {
            dispatch({
                type: GENRE_UPDATED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: GENRE_UPDATE_FAIL
            })
        })
}
