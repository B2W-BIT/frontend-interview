import { combineReducers } from 'redux'
import tweetsList from './tweets'
import user from './user'

const appReducer = combineReducers({
  tweetsList,
  user
})

export default appReducer
