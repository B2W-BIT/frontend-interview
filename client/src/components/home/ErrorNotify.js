import React from 'react';

export default class ErrorNotify extends React.Component {
  render() {
    const { message } = this.props;
    return(
        <p className="bg-danger feedback-block">{message}</p>
    );
  }
}
