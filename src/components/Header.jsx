import React from 'react';
import { Component } from 'react';

export default class Header extends Component {
	static propTypes = {
		tweets: React.PropTypes.number,
		following: React.PropTypes.number,
		followers: React.PropTypes.number,
		likes: React.PropTypes.number
	}

	static defaultProps = {
		tweets: 0,
		following: 0,
		followers: 0,
		likes: 0
	}

	shouldComponentUpdate(nextProps) {
		if(typeof this.props.tweets !== 'number' || typeof this.props.following !== 'number' || typeof this.props.followers !== 'number' || typeof this.props.likes !== 'number')
			return true;

		return this.props.tweets !== nextProps.tweets ||
			this.props.following !== nextProps.following ||
			this.props.followers !== nextProps.followers ||
			this.props.likes !== nextProps.likes;
	}

	render() {
		return (<div className="header-info">
			<div className="container">
				<div className="row">
					<div className="col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-6 col-sm-2 col-md-2 col-lg-1">Tweets <br /> { this.props.tweets.toLocaleString('pt-BR') }</div>
					<div className="col-xs-6 col-sm-2 col-md-2 col-lg-1">Seguindo <br /> { this.props.following.toLocaleString('pt-BR') }</div>
					<div className="col-xs-6 col-sm-2 col-md-2 col-lg-1">Seguidores <br /> { this.props.followers.toLocaleString('pt-BR') }</div>
					<div className="col-xs-6 col-sm-2 col-md-2 col-lg-1">Curtidas <br /> { this.props.likes.toLocaleString('pt-BR') }</div>
				</div>
			</div>
		</div>);
	}
}