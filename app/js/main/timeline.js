import React from 'react';
import moment from 'moment';

import * as Services from '../utils/services'

export default class Timeline extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tweets: []
    }
  }

  async componentWillMount() {
    try {
      const Tweets = await Services.getTweets()
      this.setState({
        tweets: Tweets
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { tweets } = this.state
    return (
      <div className="timeline">
        <div className="heading">
          <ul>
            <li><a href="" className="active">Tweets</a></li>
            <li><a href="">Tweets & replies</a></li>
            <li><a href="">Media</a></li>
          </ul>
        </div>
        <div className="stream">
          <ol>
            {tweets.map((tweet, key) => <Tweet key={key} tweet={tweet} />)}
          </ol>
        </div>
      </div>
    );
  }
}

class Tweet extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  render() {
    const { tweet } = this.props
    const created = moment(tweet.created_at).format("MMM DD")
    return(
      <li className="item">
        <div className="content">
          <div className="text-wrapper">
            <div className="header">
              <div className="avatar">
                <img src={tweet.user.profile_image_url} alt="" />
              </div>
              <a href="" className="name">{tweet.user.name}</a> <span>@{tweet.user.screen_name}</span> <a href="" className="date">{created}</a>
            </div>
            <div className="message">
              <p>{tweet.text}</p>
            </div>
            <div className="footer">
              <div className="reply">
                <span className="Icon Icon--reply" />
              </div>
              <div className="retweet">
                <span className="Icon Icon--retweet" />
              </div>
              <div className="more">
                <span className="Icon Icon--dots" />
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}