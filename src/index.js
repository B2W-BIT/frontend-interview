import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './pages/App'
import TweetsList from 'Containers/TweetsList'
import ProfileCard from 'Containers/ProfileCard'

ReactDOM.render(
  <Provider store={store}>
    <App>
      <div className="row">
        <ProfileCard />
        <TweetsList />
        <div className="col-3"></div>
      </div>
    </App>
  </Provider>
  , document.getElementById('root'))
