/*Vendor components*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import './main.scss'

/*Custom components*/
import AppContainer from './modules/app'
import ProfileContainer from './modules/profile'

import rootReducer from './appReducers'
import { Config } from './config'

/* CSS */



const { adminBase } = Config.url

const routeMiddleware = routerMiddleware(browserHistory)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(routeMiddleware),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger),
    applyMiddleware(promiseMiddleware()),
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <Route path={ `${adminBase}(:screen_name)` } component={AppContainer}>
            <IndexRoute component={ ProfileContainer } />
        </Route>
    </Router>
</Provider>, document.getElementById('app'))
