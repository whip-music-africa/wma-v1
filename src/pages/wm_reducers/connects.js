import {
    CONNECTION_REQUESTS_RECIEVED,
    CONNECTION_REQUESTS_FETCHING,
    CONNECTION_REQUESTS_FAILED,
    CONNECT_REQUEST_SENDING,
    CONNECT_REQUEST_SENT,
    FETCHING_CONNECTION_USERS,
    FETCHING_ALL_USERS,
    FETCHING_USERS_FAILED,
    FETCHING_USERS_SUCCESS
} from '../wm_actions/types';

const initialState = {
    key: localStorage.getItem("key"),
    fetchingRequests: false,
    areRequests: null,
    connectRequests: [],
    allUsers: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case CONNECTION_REQUESTS_FETCHING:
        case FETCHING_ALL_USERS:
            return {
                ...state,
                fetchingRequests: true
            }
        case CONNECTION_REQUESTS_RECIEVED:
        case FETCHING_USERS_SUCCESS:
            return {
                ...state,
                fetchingRequests: false,
                areRequests: true,
                connectRequests: action.payload,
                allUsers: action.payload
            }
        case CONNECTION_REQUESTS_FAILED:
        case FETCHING_USERS_FAILED:
            return {
                ...state,
                fetchingRequests: false,
                areRequests: null
            }
        default:
            return state;
    }
}
