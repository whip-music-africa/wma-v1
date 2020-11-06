import { AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADING, USER_LOADED } from '../wm_actions/types';

const initialState = {
    key: localStorage.getItem("key"),
    isAuthenticated: null,
    isLoading: false,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('key', action.payload.key);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }

        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem("key");
            return {
                ...state,
                key: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
            };
        default:
            return state;
    }
}
