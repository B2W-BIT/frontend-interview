import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './pages/App'
import TweetsList from './containers/TweetsList'

ReactDOM.render(
  <Provider store={store}>
    <App>
      <div className="row">
        <div className="col-3"></div>
        <TweetsList />
        <div className="col-3"></div>
      </div>
    </App>
  </Provider>
  , document.getElementById('root'))
