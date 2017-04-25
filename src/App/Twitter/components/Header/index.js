import React, { Component } from 'react';
import Nav from './components/Nav';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        fetch('http://localhost:8090/api?call=users/profile_banner')
            .then(d => d.json())
            .then(d => {
                this.setState({
                    twitterData: d
                })
            })
    }

    render() {
        if (!this.state.twitterData) return <p>Loading</p>

        let header = {
            marginBottom: '16px'
        };

        let headerInner = {
            // height: '280px',
            overflow: 'hidden',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)'
        };

        let headerImg = {
            // marginTop: '-100px',
            width: '100%'
        };

        return (
            <div style={header}>
                <div style={headerInner}>
                    <img style={headerImg} src={this.state.twitterData.sizes['1500x500'].url} />
                </div>
                <Nav />
            </div>

        );
    }
}

export default Header;