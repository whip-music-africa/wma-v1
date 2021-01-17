import axios from 'axios';
import { GET_POSTS, NUMBER_OF_LIKES, GET_PERSONAL_POSTS, GET_PERSONAL_VIDEOS } from './types';

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
    const imagePosts = axios.get('https://api.whipafrica.com/v1/posts/feed/image/', config);
    const videoPosts = axios.get('https://api.whipafrica.com/v1/posts/feed/video/', config);

    axios.all([textPosts, imagePosts, videoPosts])
        .then(axios.spread((...responses) => {
            const textRes = responses[0].data.results
            const imageRes = responses[1].data.results
            const videoRes = responses[2].data.results
            dispatch({
                type: GET_POSTS,
                payload: textRes.concat(imageRes).concat(videoRes)
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
export const postTextLike = ({ postType, postId }) => (dispatch, getState) => {
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
    // const typeOfPost = JSON.stringify(postType);
    const idOfPost = JSON.stringify(postId);
    axios.post(`https://api.whipafrica.com/v1/posts/video/like/${idOfPost}`, config)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}
export const postImageLike = ({ postType, postId }) => (dispatch, getState) => {
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
    // const typeOfPost = JSON.stringify(postType);
    const idOfPost = JSON.stringify(postId);
    axios.post(`https://api.whipafrica.com/v1/posts/image/like/${idOfPost}`, config)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}
export const postVideoLike = ({ postType, postId }) => (dispatch, getState) => {
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
    // const typeOfPost = JSON.stringify(postType);
    const idOfPost = JSON.stringify(postId);
    axios.post(`https://api.whipafrica.com/v1/posts/video/like/${idOfPost}`, config)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
}
export const getPersonalPosts = () => (dispatch, getState) => {
    const key = getState().auth.key;
    const userId = getState().auth.me[0].id
    console.log(getState().auth.me[0].id)

    //Headers
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    // If token, add to headers config
    if (key) {
        config.headers["Authorization"] = `Token ${key}`
    };
    axios.get(`https://api.whipafrica.com/v1/posts/feed/image/${userId}/`, config)
        .then(res => {
            dispatch({
                type: GET_PERSONAL_POSTS,
                payload: res.data.results
            })
            console.log(res.data.results)
        })
        .catch(err => console.log(err));
}
export const getPersonalVideos = () => (dispatch, getState) => {
    const key = getState().auth.key;
    const userId = getState().auth.me[0].id

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
    axios.get(`https://api.whipafrica.com/v1/posts/feed/video/${userId}/`, config)
        .then(res => {
            dispatch({
                type: GET_PERSONAL_VIDEOS,
                payload: res.data.results
            })
            console.log(res.data.results)
        })
        .catch(err => console.log(err));
}
export const postText = (text_body) => (dispatch, getState) => {
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
    const body = JSON.stringify({ text_body })
    axios.post(`https://api.whipafrica.com/v1/posts/text/new-text-post/`, body, config)
        .then(res => {
            console.log(res)
        })
}
export const postImage = (image_url) => (dispatch, getState) => {
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
    axios.post('https://api.whipafrica.com/v1/posts/image/new-image-post/', config)
        .then(res => {
            console.log(res)
        })
}