import axios from 'axios';
import { GET_POSTS, NUMBER_OF_LIKES } from './types';

// Get Text Posts
export const getPosts = () => (dispatch, getState) => {
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
    const textPosts = axios.get('https://api.whipafrica.com/v1/posts/feed/text/', config);
    const imagePosts = axios.get('https://api.whipafrica.com/v1/posts/feed/image/', config)

    axios.all([textPosts, imagePosts])
        .then(axios.spread((...responses) => {
            const textRes = responses[0].data.results
            const imageRes = responses[1].data.results
            dispatch({
                type: GET_POSTS,
                payload: textRes.concat(imageRes)
            })
        }))
        .catch(err => {
            console.error(err)
        })
    // axios
    //     .get('https://api.whipafrica.com/v1/posts/feed/text/', config)
    //     .then(res => {
    //         dispatch({
    //             type: GET_POSTS,
    //             payload: res.data.results
    //         });
    //     })
    //     .then('https://api.whipafrica.com/v1/posts/feed/image/', config)
    //     .then(resB => {
    //         // dispatch({
    //         //     type: GET_POSTS,
    //         //     payload: resB.data.results
    //         // })
    //         console.log(resB)
    //     })
    //     .catch(err => console.log(err));
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