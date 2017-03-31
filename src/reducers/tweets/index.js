const INITIAL_STATE = { tweetsList: { tweets: [], error: null, loading:false } }
const tweetsList = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'FETCH_TWEETS':
      return { ...state, tweetsList: { tweets: [], error: null, loading: true } }
    case 'FETCH_TWEETS_SUCCEES':
      return { ...state, tweetsList: { tweets: [...state.tweetsList.tweets, ...action.payload], error: null, loading: false } }
    case 'FETCH_MORE_TWEETS':
      return { ...state, tweetsList: { ...state.tweetsList, loading: true } }
    default:
      return state
  }
}

export default tweetsList
