import React from 'react';
import { Component } from 'react';

export default class TwitterUser extends Component {
	static propTypes = {
		verified: React.PropTypes.bool,
		name: React.PropTypes.string,
		screen_name: React.PropTypes.string
	}

	static defaultProps = {
		verified: false,
		name: '',
		screen_name: ''
	}

	shouldComponentUpdate(nextProps) {
		return this.props.screen_name !== nextProps.screen_name;
	}
	render() {
		let verifiedClassName = this.props.verified ? ' verified' : '';

		return (<span>
			<span className={ `title${verifiedClassName}` }>
				{ this.props.name }
			</span>
			<span className="accountid">@{ this.props.screen_name }</span>
		</span>);

	}
}