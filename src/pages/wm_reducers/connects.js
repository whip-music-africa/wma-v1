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
    FAILED_CONNECT_REQUEST,
    NUMBER_OF_CONNECTS,
    FETCHING_NUMBER_OF_CONNECTS,
    SENT_REQUESTS_RECEIVED,
    FETCHING_SENT_REQUEST,
    DELETING_CONNECT_REQUEST,
    DELETED_CONNECT_REQUEST,
    MERGED_CONNECT_USERS
} from '../wm_actions/types';

const initialState = {
    key: localStorage.getItem("key"),
    fetchingRequests: false,
    areRequests: null,
    connectRequests: [],
    allUsers: [],
    sentRequest: null,
    numberOfConnects: null,
    sentConnectRequests: null,
    fetchingSentRequest: false,
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
        case FETCHING_NUMBER_OF_CONNECTS:
            return {
                ...state,
                numberOfConnects: null
            }
        case MERGED_CONNECT_USERS:
            return {
                ...state,
                fetchingRequests: false,
                areRequests: true,
                // connectRequests: action.payload,
                allUsers: action.payload
            }
        case FETCHING_SENT_REQUEST:
            return {
                ...state,
                sentConnectRequests: null,
                fetchingSentRequest: true
            }
        case CONNECTION_REQUESTS_RECIEVED:
            return {
                ...state,
                connectRequests: action.payload,
                fetchingRequests: false
            }
        case NUMBER_OF_CONNECTS:
            return {
                ...state,
                numberOfConnects: action.payload
            }
        case SENT_REQUESTS_RECEIVED:
            return {
                ...state,
                sentConnectRequests: action.payload,
                fetchingSentRequest: false
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
