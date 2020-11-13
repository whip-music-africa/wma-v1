import axios from 'axios';
import { GET_POSTS, NUMBER_OF_LIKES } from './types';

// Get Posts
export const getPosts = () => (dispatch, getState) => {
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
        .get('https://api.whipafrica.com/v1/posts/feed/text/', config)
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data.results
            });
        })
        .catch(err => console.log(err));
}

// Get Likes
export const getLikes = () => (dispatch, getState) => {
    const key = getState().auth.key;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };
    axios
        .get('https://api.whipafrica.com/v1/posts/text/likes/', config)
        .then(res => {
            dispatch({
                type: NUMBER_OF_LIKES,
                payload: res.data
            })
        })
        .catch(err => console.log(err));

}