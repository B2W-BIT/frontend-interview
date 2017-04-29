import React, {Component} from 'react'
import {addPost} from '../../Action/Timeline';
import {connect} from 'react-redux';
import {getTweets} from '../../Action/Timeline';
import { forEach } from "lodash";

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textPost: '',
            tweets: []
        }

        this.onClick = this.onClick.bind(this);
        this.onChange =  this.onChange.bind(this);
        this.handleTweets = this.handleTweets.bind(this);
        this.handleTweets();
    }
    
    onChange(e){
        this.setState({textPost: e.target.value});
    }
    onClick(e) {
        e.preventDefault();
        this.props.addPost(this.state.textPost);
    }
    
    handleTweets(){
        this.props.getTweets().then((success) => {
            // console.log('fooooooooooooooooooooi');
            // console.log(success.data);
            //var tweets = [];
            var tweets = this.state.tweets;
            forEach(success.data, (item) => {
                // var corpo = JSON.parse(item.text);
                // corpo.Id = item.id;
                // tweets.push(corpo);
                // console.log(corpo);
                tweets.push(item);
                //console.log(item.user);
            });
            this.setState({ tweets: tweets });
        });
    }

    render () {

        let tweets = this.state.tweets.map(item => {
            return (<div className="cad-tweets" key={item.id}>
                <div className="img-profile"><img src={item.user.profile_image_url}/></div>
                <h1>{item.user.name}</h1>
                <p>{item.text}</p>
                
            </div>);
        }, this);

        return (
            <div>

                <div className="tweets-content">
                    {tweets}
                </div>

                <div className="escreva-post">
                    <textarea rows="10" placeholder="Escreva ..." value={this.state.textPost} onChange={this.onChange}></textarea>
                    <input type="submit" value="Postar" onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    addPost: React.PropTypes.func.isRequired,
    getTweets: React.PropTypes.func.isRequired
}

export default connect(null, {addPost, getTweets})(Post);