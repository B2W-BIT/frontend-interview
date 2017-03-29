import axios from 'axios'
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api'

export const fetchTweets = () => {
  const req = axios({
    method: 'get',
    url: `${ ROOT_URL }/tweets`
  })
  return {
    type: 'FETCH_TWEETS',
    payload: req
  }
}

export const fetchTweetsSuccees = (tweets) => {
  return {
    type: 'FETCH_TWEETS_SUCCEES',
    payload: tweets
  }
}
