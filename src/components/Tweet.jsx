import React from 'react';
import { Component } from 'react';
import TwitterUser from './TwitterUser.jsx';
import moment from 'moment';
import entities from '../utils/entities.js';

export default class Tweet extends Component {
	static contextTypes = {
		linkColor: React.PropTypes.string
	}

	renderAnswering() {
		if(this.props.in_reply_to_screen_name && this.props.entities.user_mentions && this.props.entities.user_mentions.length) {
			return (<div className="col-xs-offset-1 col-xs-11">
				Em resposta a { this.props.entities.user_mentions[0].name }
			</div>);
		}
		return null;
	}

	render() {
		return (<div className="tweet-block row">
			{ this.renderAnswering() }
			<div className="col-xs-1 tweet-img">
				<img className="img-responsive" src={ this.props.user.profile_image_url_https } alt="" />
			</div>
			<div className="col-xs-11">
				<TwitterUser verified={ this.props.user.verified } name={ this.props.user.name } screen_name={ this.props.user.screen_name } />
				- { moment(new Date(this.props.created_at)).format('DD [de] MMMM') }
				<br />
				{ entities(this.props.text, this.props.entities, this.context.linkColor, {
					src: 'user_mentions',
					url: 'screen_name',
					_url: 'http://twitter.com/',
					_from: 'screen_name',
					to: 'name'
				}, 'media', {
					src: 'urls',
					list: 'urls',
					url: 'expanded_url',
					_from: 'url',
					to: 'display_url'
				}, {
					src: 'url',
					list: 'urls',
					url: 'expanded_url',
					_from: 'url',
					to: 'display_url'
				}) }
			</div>
		</div>);
	}
}