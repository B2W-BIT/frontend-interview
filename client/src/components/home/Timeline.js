import React, { Component, PropTypes } from 'react';

const propTypes = {
  tweets: PropTypes.array
};

const defaultProps = {
  tweets: []
};

export default class Timeline extends Component {
  render() {
    const { tweets } = this.props;

    let timeline = tweets.map((tweet, i) => {
      return (
        <li key={i}>
          <div className="tweet">
            <div className="context">
              <img src={tweet.user.profile_image_url} />
            </div>
            <div className="content">
              {tweet.text}
            </div>
          </div>
        </li>
      );
    });

    return (
      <div id="timeline-container">
        <ol>
          {timeline}
        </ol>
      </div>
    );
  }
}

Timeline.propTypes = propTypes;
Timeline.defaultProps = defaultProps;
