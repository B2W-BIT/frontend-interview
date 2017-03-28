import React from 'react';
import { Component } from 'react';
import Tweet from './Tweet.jsx';

export default class Tweets extends Component {
	static propTypes = {
		tweets: React.PropTypes.array
	}

	static defaultProps = {
		tweets: []
	}

	shouldComponentUpdate(nextProps) {
		let tweets = this.props.tweets;

		return !!(
			(!tweets.length && nextProps.tweets.length) ||
			(
				tweets.length && nextProps.tweets.length &&
				(
					tweets[0].id_str !== nextProps.tweets[0].id_str ||
					tweets[tweets.length - 1].id_str !== nextProps.tweets[nextProps.tweets.length - 1].id_str
				)
			)
		);

	}

	render() {
		return (<div>
			{ this.props.tweets.map((tweet, i) => <Tweet key={ i } {...tweet} />) }
		</div>);
	}
}