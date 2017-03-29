import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducers'

const store = createStore(appReducer)

export default store
