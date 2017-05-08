// import { } from './constants'

const initialState = {
    profile: {},
    fetching: false,
    fetched: false,
    error: null,
}

export function profile(state = initialState, action) {

    switch (action.type) {
        case "FETCH_PROFILE_PENDING":
            return {
                ...state,
                fetching: true,
                error: null,
                profile: {},
            }
        case "FETCH_PROFILE_REJECTED":
            return {
                ...state,
                error: [action.payload],
                fetching: false,
            }
        case "FETCH_PROFILE_FULFILLED":
            return {
                ...state,
                profile: action.payload,
                fetching: false,
                fetched: true,
            }
        default:
            return state
    }
}
