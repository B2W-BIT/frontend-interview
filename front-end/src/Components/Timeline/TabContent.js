import React, { Component } from 'react';

class TabContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let ativo = this.props.ativo ? "active" : "inative";
        return (
            <div className={ativo}>
                {this.props.Content}
            </div>
        )
    }
}
export default TabContent