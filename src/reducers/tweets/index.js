const tweets = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TWEETS':
      return {
        ...state,
        tweetsList: {
          tweets: [],
          loading: true,
          errors: null
        }
      }
    default:
      return state
  }
}

export default tweets
