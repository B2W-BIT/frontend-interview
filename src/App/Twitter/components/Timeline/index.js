import React, { Component } from 'react';
import Moment from 'react-moment';
import Waypoint from 'react-waypoint'
import Flickr from './components/Flickr';

class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.count = 10;
    }

    componentDidMount() {
        fetch('http://localhost:8090/api?call=statuses/user_timeline&count=' + this.count)
            .then(d => d.json())
            .then(d => {
                this.setState({
                    twitterData: d
                })
            })
    }


    findHashtags(searchText) {
        var regexp = /(\s|^)\#\w\w+\b/gm
        var result = searchText.match(regexp);
        if (result) {
            result = result.map((s) => s.trim());
            console.log(result[0].substring(1));
            return result[0].substring(1);
        } else {
            return '';
        }
    }

    render() {

        if (!this.state.twitterData) return <p>Loading</p>
        console.log(this.state.twitterData);
        let shadow = {
            boxShadow: '0 1px 1px rgba(136,153,166,0.15)'
        };
        let tweets = this.state.twitterData.map((e, i) =>
            (
                <li className="list-group-item" key={i}>
                    <div className="media">
                        <div className="media" >
                            <div className="media-left">
                                <a href="#">
                                    <img className="media-object" src={e.user.profile_image_url} alt="..." />
                                </a>
                            </div>
                            <div className="media-body">
                                <h5 className="media-heading">
                                    <p><b>{e.user.name}</b> <small>@{e.user.screen_name} - <Moment fromNow ago>{e.created_at}</Moment></small></p>
                                    {e.text}
                                    <br />
                                        <Flickr source={this.findHashtags(e.text)} />

                                </h5>
                            </div>
                        </div>
                    </div>
                </li>
            ));

        console.log(tweets);
        return (
            <div className="col-sm-6">
                <ul style={shadow} className="list-group">
                    {tweets}
                </ul>
                <Waypoint onEnter={() => {
                    fetch('http://localhost:8090/api?call=statuses/user_timeline&count=' + (this.count = this.count + 10))
                        .then(d => d.json())
                        .then(d => {
                            this.setState({
                                twitterData: d
                            })
                        })
                }} />
            </div>
        );
    }
}

export default Timeline;