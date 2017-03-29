import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './pages/App'
import TweetsList from './containers/TweetsList'

ReactDOM.render(
  <Provider store={store}>
    <App>
      <h1>Hello React</h1>
      <TweetsList />
    </App>
  </Provider>
  , document.getElementById('root'))
