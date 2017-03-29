const INITIAL_STATE = { tweetsList: { tweets: [], error: null, loading:false } }
const tweetsList = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'FETCH_TWEETS':
      return { ...state, tweetsList: { tweets: [], error: null, loading: true } }
    case 'FETCH_TWEETS_SUCCEES':
      return { ...state, tweetsList: { tweets: action.payload, error: null, loading: false } }
    default:
      return state
  }
}

export default tweetsList
