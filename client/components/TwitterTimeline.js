/* global twttr */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class TwitterTimeline extends Component {
  static propTypes = {
    widgetId: PropTypes.string,
    user: PropTypes.string,
    chrome: PropTypes.string,
    limit: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = ({ initialized: false });
  }

  componentDidMount() {
    if (this.state.initialized) {
      return;
    }

    if (typeof twttr === 'undefined') {
      const twittertimeline = ReactDOM.findDOMNode(this.refs.twittertimeline);
      const twitterscript = document.createElement('script');
      twitterscript.src = '//platform.twitter.com/widgets.js';
      twitterscript.async = true;
      twitterscript.id = 'twitter-wjs';
      twittertimeline.parentNode.appendChild(twitterscript);
    } else {
      twttr.widgets.load();
    }

    this.initialized();
  }

  initialized() {
    this.setState({ initialized: true });
  }

  render() {
    const { user, widgetId, chrome, limit } = this.props;
    return (
      <a
        ref="twittertimeline"
        className="twitter-timeline"
        href={`https://twitter.com/${user}`}
        data-widget-id={widgetId}
        data-chrome={chrome}
        data-tweet-limit={limit}
      />
    );
  }
}


