import axios from 'axios';
import { 
    GET_PROFILE_INFO,
    GETTING_PROFILE_INFO, 
    FETCHING_USER_RECOMMENDATIONS, 
    USER_RECOMMENDATIONS, 
    FETCHING_OTHERS_RECOMMENDATIONS, 
    OTHERS_RECOMMENDATIONS, 
    FETCHING_USER_POSTS,
    USER_POSTS,
    FETCHING_USER_VIDEOS,
    USER_VIDEOS,
    FETCHING_OTHERS_RATINGS,
    OTHERS_RATINGS,
    SENT_RATINGS
    } from './types';

// Get User Profile Info 
export const getProfileInfo = (requestId) => (dispatch, getState) => {

    //Resetting Profile Info
    dispatch({type: GETTING_PROFILE_INFO})
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

// LOGGED IN USER RECOMMENDATIONS   
export const userRecommendations = () => (dispatch, getState) => {

    // Resetting User Recommendations
    dispatch({type: FETCHING_USER_RECOMMENDATIONS})
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers["Authorization"] = `Token ${key}`
    }

    axios.get(`https://api.whipafrica.com/v1/recommendations/`, config)
        .then(res => {
            dispatch({
                type: USER_RECOMMENDATIONS,
                payload: res.data.results
            })
            console.log(res.data.results)
        })
        .catch(err => console.log(err))
}

// OTHER USER RECOMMENDATIONS 
export const othersRecommendations = (personId) => (dispatch, getState) => {

    // Resetting Others Recommendations
    dispatch({type: FETCHING_OTHERS_RECOMMENDATIONS})
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers['Authorization'] = `Token ${key}`
    }

    axios.get(`https://api.whipafrica.com/v1/recommendations/${personId}/`, config)
        .then(res => {
            dispatch({
                type: OTHERS_RECOMMENDATIONS,
                payload: res.data.results
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

// OTHER USER RATINGS 
export const othersRatings = (personId) => (dispatch, getState) => {

    // Resetting Others Ratings
    dispatch({type: FETCHING_OTHERS_RATINGS})
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers['Authorization'] = `Token ${key}`
    }

    axios.get(`https://api.whipafrica.com/v1/rating/${personId}/`, config)
        .then(res => {
            dispatch({
                type: OTHERS_RATINGS,
                payload: res.data.results
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

// Give Ratings 
export const giveRatings = (personId, talent_rating, communication_rating, professionalism_rating) => (dispatch, getState) => {

    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers['Authorization'] = `Token ${key}`
    }
    const body = JSON.stringify({ talent_rating, communication_rating, professionalism_rating });

    axios.post(`https://api.whipafrica.com/v1/rate/${personId}/`, body, config)
        .then(res => {
            dispatch({
                type: SENT_RATINGS,
                payload: res.data.results
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

// Fetch User Posts 
export const getUserPosts = (personId) => (dispatch, getState) => {

    // Resetting User Posts
    dispatch({type: FETCHING_USER_POSTS})
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers["Authorization"] = `Token ${key}`
    }

    axios.get(`https://api.whipafrica.com/v1/posts/feed/text/${personId}/`, config)
        .then(res => {
            dispatch({type: USER_POSTS, 
            payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => {console.log(err)})
}

// Fetch User Videos
export const getUserVideos = (personId) => (dispatch, getState) => {

    // Resetting User Posts
    dispatch({type: FETCHING_USER_VIDEOS})
    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers["Authorization"] = `Token ${key}`
    }

    axios.get(`https://api.whipafrica.com/v1/posts/feed/video/${personId}/`, config)
        .then(res => {
            dispatch({type: USER_VIDEOS, 
            payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => {console.log(err)})
}
// Write Recommendations
export const giveRecommendations = (personId, recommendation) => (dispatch, getState) => {

    const key = getState().auth.key

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to headers config
    if(key) {
        config.headers['Authorization'] = `Token ${key}`
    }
    const body = JSON.stringify({ recommendation });

    axios.post(`https://api.whipafrica.com/v1/recommend/${personId}/`, body, config)
        .then(res => {
            dispatch({
                type: SENT_RATINGS,
                payload: res.data.results
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}