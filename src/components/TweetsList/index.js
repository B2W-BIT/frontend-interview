import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import { decrementHugeNumberBy1 as parseId } from 'Utilities/helpers'

class TweetsList extends Component {
  componentDidMount() {
    this.props.initFetchTweets()
  }

  renderTweets(tweets) {
    return (
      tweets.map(t => {
        if(t.hasOwnProperty('video_info')) {
          return (
            <li className="list-group-item" key={t.id}>
              {t.text}
              <video src={t.video_info.variants[0].url} autoPlay loop crossOrigin='anonymous'>
                Ops! Seu navegador não pode reproduzir este vídeo ):
              </video>
            </li>
          )
        } else {
          return <li className="list-group-item" key={t.id}>{t.text}</li>
        }
      })
    )
  }

  render() {
    const { tweets, loading, error } = this.props.tweetsList
    let lastTweet, lastTweetId

    if(loading) {
      return <div><h3>Loading Tweets...<small>wait!!</small></h3></div>
    }

    if (typeof tweets !== undefined && tweets.length > 0) {
      lastTweet = tweets[tweets.length -1]
      lastTweetId = parseId(lastTweet.id_str)
    }

    return (
      <div className="col-6">
        <div className="card">
          <ul className="list-group list-group-flush">
            { this.renderTweets(tweets) }
          </ul>
        </div>
        <Waypoint onEnter={() => this.props.fetchMore(lastTweetId)} />
        {/* <button onClick={() => this.props.fetchMore(lastTweetId)}>Fetch More</button> */}
      </div>
    )
  }
}

export default TweetsList
