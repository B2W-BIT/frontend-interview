const initialState = {
    tweetList: {},
    fetched: false,
    mustFetch: true,
    fetching: true,
    error: null,
    lastCursors: {},
    fetchType: 'tweetsAndReplies', //tweets, tweetsAndReplies, media
}

const mergeNewResults = (state, action) => {
    const tweetList = { ...state.tweetList }
    if(!!tweetList[state.fetchType]) {
        tweetList[state.fetchType] = {
            ...state.tweetList[state.fetchType],
            ...action.payload
        }
        return tweetList
    }

    tweetList[state.fetchType] = [...action.payload]

    return {
        ...tweetList
    }
}

const haveTweetsOnThisList = (tweetList, fetchType) => !!(tweetList[fetchType] && tweetList[fetchType].length > 0)

export function timeline(state = initialState, action) {

    // console.log("action", action)

    switch (action.type) {

        case "FETCH_TIMELINE_PENDING":
            return {
                ...state,
                fetching: true,
                error: null,
                fetched: false,
            }

        case "FETCH_TIMELINE_REJECTED":
            return {
                ...state,
                error: [action.payload],
                fetching: false,
                fetched:false,
            }

        case "FETCH_TIMELINE_FULFILLED":
            return {
                ...state,
                fetched: true,
                fetching: false,
                mustFetch: false,
                tweetList: mergeNewResults(state, action),
                lastCursors: {
                    ...state.lastCursors,
                    [state.fetchType]: action.payload[action.payload.length - 1].id
                }
            }

        case "CHANGE_TIMELINE_FETCHING_MODE":
            return {
                ...state,
                error: null,
                fetchType: action.fetchType,
                mustFetch: !haveTweetsOnThisList(state.tweetList, action.fetchType),
            }

        default:
            return state
    }
}
