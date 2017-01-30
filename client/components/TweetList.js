import io from 'socket.io-client';
import React from 'react';
import Tweet from './Tweet';



const TweetList = React.createClass({
  checkScroll: function() {

    // Get scroll pos & window data
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
    var scrolled = (h + s) > document.body.offsetHeight;



    if (scrolled && !this.state.paging){

      this.setState({page : this.state.page + 1, paging: true});
      this.getPage(this.state.page);
    }

  },

  getPage: function(page) {

    fetch('/page/' + page + '/' + this.state.skip)
    .then((response) => response.text())
    .then((tweet) => {
      this.addPage(JSON.parse(tweet));
    });
  },

  addPage: function(tweets) {

    if (tweets.length >= 0){

      var updated = this.state.tweets;
      tweets.forEach(function(tweet) {
        updated.push(tweet);
      });

      this.setState({tweets: updated, paging: false});

    }else {
      this.setState({
        tweets: updated,
        paging: false
      });
    }
  },
  getInitialState: function() {
    return{
      tweets: this.props.data,
      skip: 0,
      page: 0,
      paging: false
    };
  },

  addTweet: function(data) {
    var updated = this.state.tweets;
    updated.unshift(data);
    this.setState({
      tweets: updated
    });

  },

  componentDidMount: function() {
    // Handle incoming messages
    var socket = io.connect(window.location.href);

    socket.on('tweet', function(data) {
      this.addTweet(data);
    }.bind(this));

    window.addEventListener('scroll', this.checkScroll);
  },

  render : function(){
    var tweetNodes = this.state.tweets.map(function(tweet) {
      return(
        <Tweet key={tweet.twid} tweet = {tweet} />
      );
    });
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <ul className="tweets">{tweetNodes}</ul>
        </div>
    );
  }
});

module.exports = TweetList;
