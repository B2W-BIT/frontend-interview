import React, { Component } from 'react';
import Moment from 'react-moment';

class Profile extends Component {
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
        
        let profileData = this.state.twitterData;

        let profileImg = {
            border: '5px solid #fff',
            borderRadius: '12px',
            boxShadow: '0 1px 1px rgba(136,153,166,0.15)'
        };

          let block = {
              display: "block"
        };

        return (
            <div className="col-sm-3">
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
            </div>
        );
    }
}

export default Profile;