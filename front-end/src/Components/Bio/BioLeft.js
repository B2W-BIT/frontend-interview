import React, {Component} from 'react'
import PhotoPerfil from '../Bio/PhotoBio'
import {connect} from 'react-redux'
import {getBio} from '../../Action/Timeline'
import { forEach } from "lodash"

class BioLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
        this.handleTweets();
    }

    handleTweets(){
        this.props.getBio().then((success) => {
            // console.log('fooooooooooooooooooooi');
            // console.log(success.data);
            var tweets = this.state.tweets;
            forEach(success.data, (item) => {
                tweets.push(item);
                //console.log(item.user);
            });
            this.setState({ tweets: tweets });
        });
    }

    render () {
        let tweets = this.state.tweets.map(item => {
            return (
                <div className="bio-perfil" key={item.id}>
                    <PhotoPerfil />
                    {/*<div className="img-profile"><img src={item.user.profile_image_url}/></div>*/}
                    <h1>{item.user.name}</h1>
                    <h2>@{item.user.screen_name}</h2>
                    <p>{item.user.description}</p>
                    <span className="city">{item.user.location}</span>
                    <span className="link"><a href="http://americanas.com" target="_blank">{item.user.name}</a></span>
                </div>
            );
        }, this);

        return (
            <div>
                {tweets}
            </div>
        )
    }
}

BioLeft.propTypes = {
    getBio: React.PropTypes.func.isRequired
}

export default connect(null, {getBio})(BioLeft);