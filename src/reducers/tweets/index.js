const tweetsList = (state = {}, action) => {
  switch (action.type) {

    case 'FETCH_TWEETS':
      return { ...state, tweetsList: { tweets: action.payload, error: null, loading: true } }
    case 'FETCH_TWEETS_SUCCEES':
      return { ...state, tweetsList: { tweets: action.payload, error: null, loading: false } }
    default:
      return state
  }
}

export default tweetsList
