import React from 'react';
import { Component } from 'react';
import TwitterUser from './TwitterUser.jsx';
import entities from '../utils/entities.js';
import moment from 'moment';

moment.locale('pt-BR');

export default class User extends Component {
	static contextTypes = {
		linkColor: React.PropTypes.string
	}

	static propTypes = {
		img: React.PropTypes.string,
		verified: React.PropTypes.bool,
		name: React.PropTypes.string,
		screen_name: React.PropTypes.string,
		description: React.PropTypes.string,
		entities: React.PropTypes.object,
		location: React.PropTypes.string,
		url: React.PropTypes.string,
		since: React.PropTypes.string
	}

	static defaultProps = {
		img: '',
		verified: false,
		name: '',
		screen_name: '',
		description: '',
		entities: {},
		location: '',
		url: '',
		since: ''
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.screen_name !== this.props.screen_name;
	}

	render() {
		if(!Object.keys(this.props).length)
			return null;

		return (<div className="user-info">
			<img className="center-block" src={ this.props.img } alt={ this.props.name } />
			<h1>
				<TwitterUser
					verified={ this.props.verified }
					name={ this.props.name }
					screen_name={ this.props.screen_name }
				/>
			</h1>
			<p>{ entities(this.props.description, this.props.entities, this.context.linkColor, {
				src: 'description',
				list: 'urls',
				url: 'expanded_url',
				_from: 'url',
				to: 'display_url'
			}) }</p>
			<p className="location">{ this.props.location }</p>
			<p className="url">{ entities(this.props.url, this.props.entities, this.context.linkColor, {
				src: 'url',
				list: 'urls',
				url: 'expanded_url',
				_from: 'url',
				to: 'display_url'
			}) }</p>
			<p className="since">Participa desde { moment(new Date(this.props.since)).format('MMMM [de] YYYY') }</p>
		</div>);
	}
}