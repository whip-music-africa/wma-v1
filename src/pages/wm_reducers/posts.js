import { GET_POSTS, NUMBER_OF_LIKES, GET_PERSONAL_POSTS, GET_PERSONAL_VIDEOS } from '../wm_actions/types';


const initialState = {
    key: localStorage.getItem("key"),
    posts: [],
    likes: null,
    isFetching: true,
    personalPosts: [],
    personalVideos: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                isFetching: false
            }
        case NUMBER_OF_LIKES:
            return {
                ...state,
                likes: action.payload
            }
        case GET_PERSONAL_POSTS:
            return {
                ...state,
                personalPosts: action.payload
            }
        case GET_PERSONAL_VIDEOS:
            return {
                ...state,
                personalVideos: action.payload
            }
        default:
            return state;
    }
}