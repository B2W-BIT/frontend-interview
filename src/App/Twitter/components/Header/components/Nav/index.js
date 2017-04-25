import React, { Component } from 'react';
import Moment from 'react-moment';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        fetch('http://localhost:8090/api?call=users/show')
            .then(d => d.json())
            .then(d => {
                this.setState({
                    twitterData: d
                })
            })
    }

    render() {
        if (!this.state.twitterData) return <p>Loading</p>
        console.log('nav:', this.state.twitterData);
        let profileData = this.state.twitterData;

        let nav = {
            background: '#fff',
            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
            height: '60px',
            width: '100%'
        };

        return (
            <div style={nav}>
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="col-xs-3 text-center">
                        <h4>
                            <small>TWEETS</small>
                            <br />
                            <b>{profileData.statuses_count}</b>
                        </h4>
                    </div>
                        <div className="col-xs-3 text-center">
                        <h4>
                            <small>FOLLOWING</small>
                            <br />
                            <b>{profileData.friends_count}</b>
                        </h4>
                    </div>
                        <div className="col-xs-3 text-center">
                        <h4>
                            <small>FOLLOWERS</small>
                            <br />
                            <b>{profileData.followers_count}</b>
                        </h4>
                    </div>
                        <div className="col-xs-3 text-center">
                        <h4>
                            <small>LIKES</small>
                            <br />
                            <b>{profileData.favourites_count}</b>
                        </h4>
                    </div>

                </div>
            </div>
            /*<div className="col-sm-3">
                <img style={profileImg} className="img-responsive thumbnail" src={profileData.profile_image_url.replace('normal', '400x400')} alt="..." />
                <h4>{profileData.name}
                    <br/>
                    <small>@{profileData.screen_name}</small>
                </h4>
                <p>{profileData.description}</p>
                <p>
                    <span style={block}>{profileData.location}</span>
                    <a href={profileData.url} target="_blank" style={block}>{profileData.url}</a>
                    <span style={block}>Joined <Moment format="MMMM YYYY">{profileData.created_at}</Moment></span>
                </p>
            </div>*/
        );
    }
}

export default Nav;