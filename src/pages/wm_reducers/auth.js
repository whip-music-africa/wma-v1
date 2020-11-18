import { AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADING, USER_LOADED, REGISTER_SUCCESS, REGISTER_FAIL, PROFESSION_UPDATED, GENRE_UPDATED, PROFESSION_UPDATE_FAIL, GENRE_UPDATE_FAIL } from '../wm_actions/types';

const initialState = {
    key: localStorage.getItem("key"),
    isAuthenticated: null,
    registerSuccessful: true,
    isLoading: false,
    users: [],
    profession: [],
    genre: [],
    professionUpdate: null,
    genreUpdate: null,
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
                users: action.payload.url,
                profession: action.payload.profession,
                genre: action.payload.genre,
            }
        case PROFESSION_UPDATED:
            return {
                ...state,
                profession: action.payload.profession,
                professionUpdate: true,
            }
        case GENRE_UPDATED:
            return {
                ...state,
                genre: action.payload.genre,
                genreUpdate: true,
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
        case PROFESSION_UPDATE_FAIL:
        case GENRE_UPDATE_FAIL:
            return {
                ...state,
                professionUpdate: false,
                genreUpdate: false
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
