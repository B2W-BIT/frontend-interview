import React from 'react';
import Tweets from './tweets.jsx';
import axios from 'axios';

class TweetsScrollPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: props.tweets
    };

    this.lastTweet = props.tweets[props.tweets.length - 1].id;

    window.addEventListener('scroll', event => {
      var scrollPercentage = (window.screen.height / (document.body.offsetHeight - window.pageYOffset)) * 100;

      if (scrollPercentage > 75) {
        this.loadModeTweets();
      }
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  loadModeTweets() {
    let previousTweets = this.state.tweets;

    if (this.loadingTweets) {
      return;
    }

    this.loadingTweets = true;

    this.serverRequest = axios.get(`/twitter/tweets/from/` + this.lastTweet)
    .then(res => {
      this.updateTweets(res.data);
      this.loadingTweets = false;
    }
    );
  }

  updateTweets(newTweets) {
    let previousTweets = this.state.tweets;
    let tweets = previousTweets.concat(newTweets);

    this.setState({ tweets });
    this.lastTweet = tweets[tweets.length - 1].id;
  }

  render() {
    let tweets = this.state.tweets;

    if (!tweets.length) {
      return false;
    }

    return (
      <Tweets tweets={tweets} />
    );
  }
}

export default TweetsScrollPagination;