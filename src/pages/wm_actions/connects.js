import axios from 'axios';
import {
    CONNECTION_REQUESTS_RECIEVED,
    CONNECTION_REQUESTS_FETCHING,
    FETCHING_CONNECTION_USERS,
    FETCHING_ALL_USERS,
    FETCHING_USERS_FAILED,
    FETCHING_USERS_SUCCESS,
    SENDING_CONNECT_REQUEST,
    SENT_CONNECT_REQUEST,
    FAILED_CONNECT_REQUEST
} from './types';
import { returnErrors } from './messages'
import { isLegacyEdge } from 'react-device-detect';


// Fetching the Connection Request Recieved
export const loadRequests = () => (dispatch, getState) => {

    // Connection Requests Fetching State 
    dispatch({ type: CONNECTION_REQUESTS_FETCHING })
    // Get Token from state
    const key = getState().auth.key;

    //Headers
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
        .get("https://api.whipafrica.com/v1/connections/users/connectrequests/", config)
        .then(res => {
            dispatch({
                type: CONNECTION_REQUESTS_RECIEVED,
                payload: res.data.results
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// Fetching All Users in the App For Connection Recommendations
export const loadUsers = () => (dispatch, getState) => {

    // User Fetching State 
    dispatch({ type: FETCHING_ALL_USERS });

    // Get Token from state
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
        .get("https://api.whipafrica.com/v1/users/", config)
        .then(res => {
            dispatch({
                type: FETCHING_USERS_SUCCESS,
                payload: res.data.results
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// Connection Request System
export const sendRequest = (requestId) => (dispatch, getState) => {

    // Sending Request State
    dispatch({ type: SENDING_CONNECT_REQUEST });

    // Get Token from state
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${key}`
        }
    }

    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };

    const requestUrl = JSON.stringify(requestId)
    console.log(requestId)
    console.log(`https://api.whipafrica.com/v1/connections/users/connectrequests/${requestId}/`, config)

    axios
        .post(`https://api.whipafrica.com/v1/connections/users/connectrequests/${requestId}/`, config)
        .then(res => {
            dispatch({
                type: SENT_CONNECT_REQUEST,
                payload: res
            })
            console.log(res.data)
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: FAILED_CONNECT_REQUEST })
            console.log(err.response)
        })
}