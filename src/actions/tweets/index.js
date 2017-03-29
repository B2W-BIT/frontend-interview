export const fetchTweets = () => {
  return {
    type: 'FETCH_TWEETS',
    payload: [
      {
        id: 1,
        text: 'some tweet'
      }
    ]
  }
}
