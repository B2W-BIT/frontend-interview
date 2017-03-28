import React from 'react';
import { Component } from 'react';

export default class Banner extends Component {
	static propTypes = {
		src: React.PropTypes.string,
		alt: React.PropTypes.string
	}

	static defaultProps = {
		src: '',
		alt: ''
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.src !== this.props.src;
	}

	render() {
		return (<img className="img-responsive" src={ this.props.src } alt={ this.props.alt } />);
	}
}