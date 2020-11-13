import { AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADING, USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL } from '../wm_actions/types';

const initialState = {
    key: localStorage.getItem("key"),
    isAuthenticated: null,
    registerSuccessful: true,
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
        case REGISTER_SUCCESS:
            localStorage.setItem('key', action.payload.key);
            return {
                ...state,
                ...action.payload,
                registerSuccessful: true,
                isLoading: false,
                isAuthenticated: true,
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem("key");
            return {
                ...state,
                key: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                // registerSuccessful: false,
            };
        default:
            return state;
    }
}
