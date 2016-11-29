import React from 'react';

import * as Services from '../utils/services'

export default class Timeline extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  async componentWillMount() {
    try {
      //const Tweets = await Services.getTweets()
      //console.log(Tweets)
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
            <li><a href="" className="active">Tweets & replies</a></li>
            <li><a href="">Media</a></li>
          </ul>
        </div>
        <div className="stream">
          <ol>
            <li className="item">
              <div className="context">
                <div className="margin-fix">
                  <span className="Icon Icon--reply" />
                  <p>In reply to <a href="" className="name">Nome</a></p>
                </div>
              </div>
              <div className="content">
                <div className="text-wrapper">
                  <div className="header">
                    <div className="avatar">
                      <img src="" alt="" />
                    </div>
                    <a href="" className="name">nome</a> <span>@screename</span> <a href="" className="date">Jan 28</a>
                  </div>
                  <div className="message">
                    <p> Por favor, manda pra gente um “print” da página e o link do produto. Assim, vamos conseguir te ajudar.</p>
                  </div>
                  <div className="footer">
                    <div className="reply">
                      <span className="Icon Icon--reply" />
                    </div>
                    <div className="retweet">
                      <span className="Icon Icon--retweet" />
                    </div>
                    <div className="like">
                      <span className="Icon Icon--like" />
                    </div>
                    <div className="more">
                      <span className="Icon Icon--dots" />
                    </div>
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
