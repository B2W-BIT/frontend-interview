import { combineReducers } from 'redux'
import tweetsList from './tweets'

const appReducer = combineReducers({
  tweetsList
})

export default appReducer
