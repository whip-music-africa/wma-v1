import axios from 'axios';
import { GET_PROFILE_INFO } from './types';

// Get User Profile Info 
export const getProfileInfo = (requestId) => (dispatch, getState) => {
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
    }

    axios.get(`https://api.whipafrica.com/v1/users/${requestId}/`, config)
        .then(res => {
            dispatch({
                type: GET_PROFILE_INFO,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}