import { GET_PROFILE_INFO, GETTING_PROFILE_INFO } from '../wm_actions/types'

const initialState = {
    person: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETTING_PROFILE_INFO:
            return {
                person: []
            }
        case GET_PROFILE_INFO:
            return {
                ...state,
                person: action.payload
            }
        default:
            return state;
    }
}
