import { combineReducers } from 'redux'
import tweets from './tweets'

const appReducer = combineReducers({
  tweets
})

export default appReducer
