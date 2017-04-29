import React, { Component } from 'react';

class TabLi extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let clicado = this.props.clicado ? "clicado" : "noactive";
        return (
            <div className={clicado}>
                {this.props.Content}
            </div>
        )
    }
}
export default TabLi