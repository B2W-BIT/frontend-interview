const tweets = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TWEETS':
      return {
        ...state,
        tweetsList: action.payload
      }
    default:
      return state
  }
}

export default tweets
