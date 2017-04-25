import React, { Component } from 'react';

class Flickr extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        if (this.props.source) {
            fetch('http://localhost:8090/api/flickr?search=' + this.props.source)
                .then(d => d.json())
                .then(d => {
                    this.setState({
                        flickrImg: d[Math.floor(Math.random()*d.length)]
                    })
                })
        }
    }

    render() {
        if (!this.state.flickrImg) return <p></p>

        return (
           <p>
                <img className="img-responsive" src={this.state.flickrImg} />
           </p>
        );
    }
}

export default Flickr;