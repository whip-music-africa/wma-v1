import { GET_ERRORS, GET_POSTS } from '../wm_actions/types';


const initialState = {
    something: 'text',
    key: localStorage.getItem("key"),
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}