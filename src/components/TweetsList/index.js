import React, { Component } from 'react'

class TweetsList extends Component {
  componentDidMount() {
    this.props.initFetchTweets()
  }

  render() {
    const { tweets, loading, error } = this.props.tweetsList
    return (
      <div>
        <h3>I'am a list of tweets</h3>
        <ul>
          { tweets.map(t => {
            return <li key={t.id}>{t.text}</li>
          }) }
        </ul>
      </div>
    )
  }
}

export default TweetsList
