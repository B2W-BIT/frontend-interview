import React from 'react';
import { Component } from 'react';
import TwitterActions from '../actions/Twitter.js';
import TwitterStore from '../stores/Twitter.js';

import Banner from './Banner.jsx';
import Header from './Header.jsx';
import Tweets from './Tweets.jsx';
import User from './User.jsx';

const debounce = (func, wait, immediate) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default class Twitter extends Component {
	static childContextTypes = {
		linkColor: React.PropTypes.string
	}

	constructor(props) {
		super(props);

		this.state = {
			user: {},
			tweets: [],
			linkColor: ''
		};

		this.onChange = this.onChange.bind(this);
	}

	pagination() {
		window.addEventListener('scroll', debounce(evt => {
			if((document.documentElement.clientHeight + document.body.scrollTop) > (document.body.offsetHeight - 700)) {
				this.reloadTimeline();
			}
		}));
	}

	reloadTimeline() {
		if(!this.loadingTimeline) {
			this.loadingTimeline = true;
			let tweets = this.state.tweets;

			TwitterActions.getTimeline(tweets[tweets.length - 1].id_str);
		}
	}

	componentDidMount() {
		TwitterStore.listen(this.onChange);
		TwitterActions.getTimeline();
		TwitterActions.getUserInfo();
	}

	getChildContext() {
		return {linkColor: this.state.user.profile_link_color};
	}

	componentWillUnmount() {
		TwitterStore.unlisten(this.onChange);
	}

	onChange(store) {
		let state = this.state;

		if(store.user && !Object.keys(state.user).length) {
			this.setState({
				user: store.user
			});
		}

		if(store.tweets && !state.tweets.length) {
			this.setState({
				tweets: store.tweets
			}, this.pagination);
		}

		if(store.tweets && store.tweets.length && state.tweets.length) {
			if(state.tweets[state.tweets.length - 1].id_str === store.tweets[0].id_str)
				store.tweets.shift();

			this.setState({
				tweets: state.tweets.concat(store.tweets)
			}, () => {this.loadingTimeline = false;});
		}
	}


	render() {
		let user = this.state.user,
			tweets = this.state.tweets;
		return (<div>
			<Banner src={ user.profile_banner_url } alt={ user.name } />
			<Header
				tweets={ user.statuses_count }
				following={ user.friends_count }
				followers={ user.followers_count }
				likes={ user.favourites_count }
			/>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-3 col-md-3">
						<User
							img={ user.profile_image_url_https }
							verified={ user.verified }
							name={ user.name }
							screen_name={ user.screen_name }
							description={ user.description }
							entities={ user.entities }
							location={ user.location }
							url={ user.url }
							since={ user.created_at }
						/>
					</div>
					<div className="col-xs-12 col-sm-7 tweets">
						<Tweets tweets={ this.state.tweets } />
					</div>
					<div className="col-xs-12 col-sm-1"></div>
				</div>
			</div>
		</div>);
	}
}