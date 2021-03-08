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
    FAILED_CONNECT_REQUEST,
    NUMBER_OF_CONNECTS,
    FETCHING_NUMBER_OF_CONNECTS,
    FETCHING_SENT_REQUEST,
    SENT_REQUESTS_RECEIVED,
    DELETED_CONNECT_REQUEST,
    DELETING_CONNECT_REQUEST,
    MERGED_CONNECT_USERS
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
// Fetching Connection Users
export const connectionUsers = () => (dispatch, getState) => {

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
    const mergeById = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.receiver === itm.id) && item),
        ...itm
    }));
    const allConnectUsers = axios.get("https://api.whipafrica.com/v1/users/", config);
    const sentRequestUsers = axios.get("https://api.whipafrica.com/v1/connections/users/connectrequests/pending/", config)
    axios.all([allConnectUsers, sentRequestUsers])
        .then(axios.spread((...responses) => {
            const allConnectUsersRes = responses[0].data.results
            const sentRequestUsersRes = responses[1].data.results
            dispatch({
                type: MERGED_CONNECT_USERS,
                payload: mergeById(allConnectUsersRes, sentRequestUsersRes)
            })
        }))
        .catch(err => {
            console.error(err)
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
            "Authorization": `token ${key}`
        }
    }

    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };

    const requestUrl = JSON.stringify(requestId)
    console.log(requestId)
    console.log(`https://api.whipafrica.com/v1/connections/users/connectrequests/${requestId}/`, {}, config)

    axios
        .post(`https://api.whipafrica.com/v1/connections/users/connectrequests/${requestId}/`, {}, config)
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
export const updateSentRequest = () => (dispatch, getState) => {
    dispatch({ type: FETCHING_SENT_REQUEST });

    // Get Token from state
    const key = getState().auth.key

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

    axios.get(`https://api.whipafrica.com/v1/connections/users/connectrequests/pending/`, config)
        .then(res => {
            dispatch({
                type: SENT_REQUESTS_RECEIVED,
                payload: res.data.results
            })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}
// Fetching Number of Connections for a single User
export const numberOfConnections = () => (dispatch, getState) => {

    // Fetching Number of Connections
    dispatch({ type: FETCHING_NUMBER_OF_CONNECTS })
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
        .get("https://api.whipafrica.com/v1/connections/users/connects/", config)
        .then(res => {
            dispatch({
                type: NUMBER_OF_CONNECTS,
                payload: res.data.count
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// Delete Connection /connections/users/connects/disconnect/
export const deleteConnection = (requestId) => (dispatch, getState) => {

    // Deleting Request State
    dispatch({ type: DELETING_CONNECT_REQUEST });

    // Get Token from state
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${key}`
        }
    }

    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };

    const requestUrl = JSON.stringify(requestId)
    console.log(requestId)
    console.log(`https://api.whipafrica.com/v1/connections/users/connects/disconnect/${requestId}/`, config)

    axios
        .delete(`https://api.whipafrica.com/v1/connections/users/connects/disconnect/${requestId}/`, config)
        .then(res => {
            dispatch({
                type: DELETED_CONNECT_REQUEST,
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