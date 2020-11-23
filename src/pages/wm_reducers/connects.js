import {
    CONNECTION_REQUESTS_RECIEVED,
    CONNECTION_REQUESTS_FETCHING,
    CONNECTION_REQUESTS_FAILED,
    CONNECT_REQUEST_SENDING,
    CONNECT_REQUEST_SENT,
    FETCHING_CONNECTION_USERS,
    FETCHING_ALL_USERS,
    FETCHING_USERS_FAILED,
    FETCHING_USERS_SUCCESS,
    SENDING_CONNECT_REQUEST,
    SENT_CONNECT_REQUEST,
    FAILED_CONNECT_REQUEST
} from '../wm_actions/types';

const initialState = {
    key: localStorage.getItem("key"),
    fetchingRequests: false,
    areRequests: null,
    connectRequests: [],
    allUsers: [],
    sentRequest: null,
};


export default function (state = initialState, action) {
    switch (action.type) {
        case CONNECTION_REQUESTS_FETCHING:
        case FETCHING_ALL_USERS:
        case SENDING_CONNECT_REQUEST:
            return {
                ...state,
                fetchingRequests: true,
                sentRequest: false
            }
        case FETCHING_USERS_SUCCESS:
            return {
                ...state,
                fetchingRequests: false,
                areRequests: true,
                // connectRequests: action.payload,
                allUsers: action.payload
            }
        case CONNECTION_REQUESTS_RECIEVED:
            return {
                ...state,
                connectRequests: action.payload,
                fetchingRequests: false
            }
        case SENT_CONNECT_REQUEST:
            return {
                ...state,
                sentRequest: true
            }
        case CONNECTION_REQUESTS_FAILED:
        case FETCHING_USERS_FAILED:
        case FAILED_CONNECT_REQUEST:
            return {
                ...state,
                fetchingRequests: false,
                areRequests: null,
                sentRequest: false
            }
        default:
            return state;
    }
}
