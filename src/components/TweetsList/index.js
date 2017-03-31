import React, { Component } from 'react'

class TweetsList extends Component {
  componentDidMount() {
    this.props.initFetchTweets()
  }

  renderTweets(tweets) {
    return (
      tweets.map(t => {
        return <li key={t.id}>{t.text}</li>
      })
    )
  }

  render() {
    const { tweets, loading, error } = this.props.tweetsList
    let lastTweet, lastTweetId

    if(loading) {
      return <div><h3>Loading Tweets...</h3></div>
    }

    if (typeof tweets !== undefined && tweets.length > 0) {
      lastTweet = tweets[tweets.length -1]
      lastTweetId = lastTweet.id
    }

    return (
      <div>
        <h3>I'am a list of tweets</h3>
        <ul>
          { this.renderTweets(tweets) }
        </ul>
        <button onClick={() => this.props.fetchMore(lastTweetId)}>Fetch More</button>
      </div>
    )
  }
}

export default TweetsList
