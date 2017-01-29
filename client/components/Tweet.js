import React from 'react';

const Tweet = React.createClass({
  render(){
    let tweet = this.props.tweet;
    return(
      <li className="tweet">
        <img className="avatar" src={tweet.avatar}/>
        <blockquote>
          <cite>
            <a href={'http://www.twitter.com/' + tweet.screenname}>{tweet.author}</a>
            <span>@{tweet.screenname}</span>
          </cite>
        <span className="content">{tweet.body}</span>
        </blockquote>
      </li>
    );
  }
});

export default Tweet;
