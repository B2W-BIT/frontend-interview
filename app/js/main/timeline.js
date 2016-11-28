import React from 'react';

import * as Services from '../utils/services'

export default class Timeline extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  async componentWillMount() {
    try {
      const Tweets = await Services.getTweets()
      console.log(Tweets)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div className="timeline">
        <div className="heading">
          <ul>
            <li><a href="">Tweets</a></li>
            <li><a href="">Tweets & replies</a></li>
            <li><a href="">Media</a></li>
          </ul>
        </div>
        <div className="stream">
          <ol>
            <li className="item">
              <div className="context">
                <div className="margin-fix">
                  <i />
                  <p>reply to blablabla</p>
                </div>
              </div>
              <div className="content">
                <div className="text-wrapper">
                  <div className="header">
                    <div className="avatar">
                      <img src="" alt="" />
                    </div>
                    <a href="">nome</a> <span>@screename</span> <a href="">Jan 28</a>
                  </div>
                  <div className="message">
                    <p>Qualquer coisa</p>
                  </div>
                  <div className="footer">
                    <div className="reply">
                      <i />
                      <p></p>
                    </div>
                    <div className="retweet">
                      <i />
                      <p></p>
                    </div>
                    <div className="like">
                      <i />
                      <p></p>
                    </div>
                    <div className="more">
                      <i />
                    </div>
                    <a href="" className="conversation">View conversation</a>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
