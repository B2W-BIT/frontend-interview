import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import appReducer from '../reducers'

const store = createStore(
  appReducer
  , applyMiddleware(promise)
)

export default store
