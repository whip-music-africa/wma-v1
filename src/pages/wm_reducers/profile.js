import { 
    GET_PROFILE_INFO, 
    GETTING_PROFILE_INFO, 
    FETCHING_USER_RECOMMENDATIONS, 
    USER_RECOMMENDATIONS, 
    OTHERS_RECOMMENDATIONS, 
    FETCHING_OTHERS_RECOMMENDATIONS,
    FETCHING_USER_POSTS,
    USER_POSTS,
    FETCHING_USER_VIDEOS,
    USER_VIDEOS,
    FETCHING_OTHERS_RATINGS,
    OTHERS_RATINGS,
    SENT_RATINGS
    } from '../wm_actions/types'

const initialState = {
    person: [],
    recommendations: [],
    personRecommendations: [],
    userPosts: [],
    userVideos: [],
    personRatings: [],
    isFetchingPersonProfile: true,
    isFetchingUserPosts: true, 
    isFetchingRecommendations: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETTING_PROFILE_INFO:
            return {
                isFetchingPersonProfile: true,
                person: []
            }
        case FETCHING_USER_RECOMMENDATIONS:
            return {
                ...state,
                recommendations: [],
                isFetchingRecommendations: true
            }
        case FETCHING_USER_POSTS:
            return{
                ...state,
                isFetchingUserPosts: true,
                userPosts: []
            }
        case FETCHING_OTHERS_RATINGS:
            return {
                ...state,
                personRatings: []
            }
        case FETCHING_USER_VIDEOS:
            return {
                ...state,
                userVideos: []
            }
        case FETCHING_OTHERS_RECOMMENDATIONS:
            return {
                ...state,
                personRecommendations: []
            }
        case GET_PROFILE_INFO:
            return {
                ...state,
                isFetchingPersonProfile: false,
                person: action.payload
            }
        case USER_VIDEOS:
            return {
                ...state,
                userVideos: action.payload
            }
        case OTHERS_RATINGS:
            return {
                ...state,
                personRatings: action.payload
            }
        case USER_POSTS:
            return {
                ...state,
                isFetchingUserPosts: false,
                userPosts: action.payload
            }
        case USER_RECOMMENDATIONS:
            return {
                ...state,
                recommendations: action.payload,
                isFetchingRecommendations: false
            }
        case OTHERS_RECOMMENDATIONS:
            return {
                ...state,
                personRecomendations: action.payload
            }
        default:
            return state;
    }
}
