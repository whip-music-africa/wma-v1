import { GET_POSTS, NUMBER_OF_LIKES } from '../wm_actions/types';


const initialState = {
    something: 'text',
    key: localStorage.getItem("key"),
    posts: [],
    likes: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case NUMBER_OF_LIKES:
            return {
                ...state,
                likes: action.payload
            }
        default:
            return state;
    }
}