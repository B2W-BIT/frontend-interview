import React from 'react';
import Tweet from './tweet.jsx';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let tweets = this.props.tweets;

    return (
      <ul className="tweets__list">
        {tweets.map(tweet =>
          <li key={tweet.id} id={tweet.id} className="tweets__list__item">
              <Tweet tweet={tweet} />
          </li>
        )}
      </ul>
    );
  }
}

export default Tweets;