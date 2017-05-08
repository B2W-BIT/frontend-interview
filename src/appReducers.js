/*Vendor imports*/
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
/*Custom imports*/
import { app } from './modules/app/reducer'
import { profile } from './modules/profile/reducer'
import { sidebar } from './modules/sidebar/reducer'
import { timeline } from './modules/timeline/reducer'

const root = combineReducers({
   app,
   profile,
   sidebar,
   timeline,
   "routing": routerReducer
})

export default root
