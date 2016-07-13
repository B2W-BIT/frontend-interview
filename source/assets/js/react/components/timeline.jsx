import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import MakeRequestJson from '../utils/request';
import { textToLinks } from '../utils/miscellaneous';

export default class Timeline extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false
    };

    this.lastId = 0;

    this._generateItem    = this._generateItem.bind(this);
    this._infinityScroll  = this._infinityScroll.bind(this);
    this._moreTweets      = this._moreTweets.bind(this);
  }

  componentDidMount() {
    let me = this;

    MakeRequestJson({url: '/1.1/statuses/user_timeline.json?screen_name=americanascom&include_rts=1&count=5'}).then((data) => {
      me.setState({
        data: data,
        lastId: data[data.length-1].id
      });
    });

    this._infinityScroll();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.data !== this.state.data;
  }

  _infinityScroll() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset + document.documentElement.clientHeight === document.body.clientHeight) {
        this.setState({
          loading: true
        });
        setTimeout(() => {
          this._moreTweets();
        }, 100);
      }
    });
  }

  _moreTweets() {
    let me = this;
    let url = "/1.1/statuses/user_timeline.json?screen_name=americanascom&include_rts=1&count=5&max_id="+ this.state.lastId;

    MakeRequestJson({
      url: url
    }).then((data) => {
      me.setState({
        lastId: data[data.length-1].id,
        data: me.state.data.concat(data)
      });
    });
  }

  _generateItem(item, index) {
    if(item.id === this.state.lastId){
      this.setState({
        loading: false
      });
    }
    return (
      <div className="tweet" key={item.id}>
        <div className="tweet-header">
          <a className="tweet-link" href="">
            <img className="tweet-avatar" src={item.user.profile_image_url} alt="" width="48" height="48" />
            <strong className="tweet-fullname">americanas.com</strong> <span className="tweet-username">‏@americanascom</span><em className="tweet-time">6h</em>
          </a>
          <button className="tweet-translateButton" type="button">
            <span className="tweet-translateButton-text">View translation</span>
            <svg className="tweet-translateButton-svg" width="12" height="12" viewBox="0 0 100 100"><path fillRule="evenodd" clipRule="evenodd" d="M0 49.764C-.04 22.064 22.544.044 50.242 0 77.235-.044 100.01 22.09 100 50.06 99.99 76.84 78.79 99.91 49.916 100 22.31 100.085 0 77.522 0 49.764zm18.13-16.11c2.124-.233 3.874-.477 5.633-.592.854-.056 1.355-.324 1.73-1.13.992-2.132 2.054-4.233 3.158-6.31.273-.51.74-1.027 1.245-1.29 6.72-3.502 13.467-6.953 20.194-10.44.28-.147.65-.575.61-.81-.36-2.137-.8-4.258-1.213-6.358-18.765-.505-36.545 14.35-40.32 29.9l16.865 7.56c-.25.79-.364 1.36-.604 1.874-1.263 2.703-.837 5.258.047 8.047.854 2.698 2.208 4.726 4.492 6.262.77.52 1.5 1.115 2.18 1.75.324.305.635.76.7 1.187.747 4.958 1.573 9.908 2.116 14.89.378 3.463 1.32 6.558 3.94 9.025.12-.2.26-.416.376-.644 2.31-4.497 4.645-8.98 6.916-13.498 1.615-3.213 3.153-6.428 6.277-8.57 1.53-1.047 2.797-2.47 4.27-3.613.714-.555.85-1.096.695-1.926-.404-2.18-.707-4.38-1.103-6.56-.072-.395-.32-.83-.617-1.1-3.368-3.033-6.748-6.055-10.167-9.03-.37-.323-1.03-.51-1.527-.463-3.18.304-6.352.72-9.532 1.032-.978.095-2.222.36-2.93-.097-4.437-2.86-8.756-5.9-13.43-9.1zm45.25 2.686c.583.505 1.107.975 1.648 1.426 2.258 1.886 4.03 4.334 7.007 5.374 2.798.977 5.454 2.353 8.21 3.46.97.39 1.603.973 2.123 1.853 2.12 3.593 4.355 7.12 6.417 10.747.64 1.127 1.532 1.377 2.512 1.134.45-.11.885-.954 1.025-1.538 1.162-4.845 1.333-9.74.656-14.677-1.44-10.495-6.168-19.25-13.92-26.41-.436-.4-1.016-.84-1.567-.896-5.157-.535-10.324-.998-15.49-1.447-.264-.023-.678.193-.813.422-1.503 2.533-1.337 3.205.68 5.285 2.426 2.502 4.74 5.113 7.074 7.645l-5.56 7.62z"/></svg>
          </button>
        </div>
        <div className="tweet-content" dangerouslySetInnerHTML={{__html: textToLinks(item.text)}}></div>
        <div className="tweet-footer">
          <nav className="tweet-action">
            <ul className="tweet-action-list">
              <li className="tweet-action-item">
                <button className="tweet-action-button" type="button">
                  <svg className="tweet-action-icon" width="18" height="14" viewBox="0 0 100 71"><path fillRule="evenodd" clipRule="evenodd" d="M51.615 25.844c4.412 0 8.636.048 12.858-.008 15-.2 27.42 9.11 32.896 21.777 2.074 4.8 3.04 9.902 2.467 15.155-.43 3.938-3.678 7.27-7.44 7.982-4.28.81-8.366-.94-10.273-4.724-.78-1.55-1.258-3.382-1.367-5.117-.45-7.176-4.668-13.02-11.26-15.01-1.65-.5-3.44-.697-5.17-.74-4.177-.105-8.357-.034-12.71-.034v1.428c0 5.896-.05 11.79.02 17.686.034 2.79-1.197 4.773-3.565 5.99-2.38 1.22-4.688.993-6.912-.69-10.035-7.584-20.112-15.112-30.175-22.66-2.808-2.107-5.592-4.245-8.43-6.313-3.09-2.253-3.503-7.17-.548-9.62 3.406-2.826 7-5.424 10.54-8.086 9.354-7.033 18.72-14.05 28.083-21.067 2.29-1.716 4.73-2.47 7.463-1.04 2.273 1.19 3.502 3.062 3.514 5.632.027 5.98.01 11.958.01 17.938-.002.45-.002.903-.002 1.52z"/></svg>
                </button>
              </li>
              <li className="tweet-action-item">
                <button className="tweet-action-button" type="button">
                  <svg className="tweet-action-icon" width="22" height="16" viewBox="0 0 100 60"><g fillRule="evenodd" clipRule="evenodd"><path d="M27.512 30.01v14.982h1.173c6.992 0 13.984-.006 20.977.002 3.183.004 5.592 1.354 7.096 4.193 2.327 4.394-.72 10.117-5.667 10.64-.86.09-1.73.143-2.597.144-9.333.012-18.667.005-28 .01-3.225 0-5.764-1.297-7.145-4.228-.586-1.242-.784-2.763-.8-4.16-.08-6.748-.036-13.498-.036-20.247v-1.277c-.45-.022-.806-.053-1.16-.054-2.042-.005-4.083.005-6.123-.005s-3.695-.86-4.617-2.652c-.95-1.846-.796-3.784.47-5.484 4.95-6.64 9.91-13.27 14.917-19.868 2.04-2.688 6.016-2.664 8.042.02 4.868 6.452 9.7 12.93 14.528 19.408.975 1.31 1.673 2.743 1.395 4.45-.35 2.138-2.19 3.935-4.356 4.05-2.27.123-4.547.062-6.82.08-.396 0-.79-.003-1.278-.003zM72.496 30.038V14.97H71.28c-6.926 0-13.854-.017-20.78.01-3.06.01-5.48-1.12-7.008-3.812-2.777-4.884.613-11.035 6.23-11.09 10.17-.1 20.346-.07 30.52-.007 4.105.026 7.24 3.366 7.25 7.543.022 7.052.006 14.104.006 21.155v1.21c.397.022.748.056 1.1.057 2.04.005 4.082.01 6.123 0 2.056-.01 3.757.618 4.69 2.597.957 2.026.75 3.93-.616 5.73-3.13 4.122-6.24 8.262-9.357 12.395-1.71 2.267-3.414 4.537-5.13 6.8-2.403 3.166-6.008 3.3-8.443.135-5.03-6.538-9.99-13.133-14.896-19.767-2.382-3.22-.316-7.553 3.68-7.816 2.165-.144 4.346-.057 6.52-.073.4-.002.8 0 1.328 0z"/></g></svg>
                </button>
              </li>
              <li className="tweet-action-item">
                <button className="tweet-action-button" type="button">
                  <svg className="tweet-action-icon" width="16" height="16" viewBox="0 0 100 100"><path fillRule="evenodd" clipRule="evenodd" d="M49.868 11.117C63.988-5.08 84.37-1.647 93.944 10.435c6.507 8.212 7.02 17.593 5.024 27.04-5.33 25.214-19.636 44.535-40.42 59.31-5.42 3.855-10.96 4.517-16.6.48C19.043 80.874 2.97 60.083.172 31.053-1.09 17.94 4.62 7.97 15.58 2.726 26.334-2.42 38.102-.202 47.356 8.71c.72.695 1.444 1.386 2.512 2.407z"/></svg>
                </button>
              </li>
              <li className="tweet-action-item">
                <button className="tweet-action-button" type="button">
                  <svg className="tweet-action-icon" width="20" height="8" viewBox="0 0 100 28.001"><g fillRule="evenodd" clipRule="evenodd"><path d="M74.01 14.02c0-6.24 4.07-12.062 9.555-13.532 7.875-2.11 14.395 3.264 15.978 9.926 1.465 6.163-.657 12.018-5.436 15.302-6.51 4.473-15.417 2.342-19.074-6.302-.36-.847-.593-1.765-.765-2.673-.165-.873-.175-1.778-.257-2.72zM37.027 14.59C36.97 7.76 41.077 1.93 46.62.472c7.014-1.844 14.04 2.444 15.85 9.673 1.655 6.603-1.013 13.392-6.58 16.312-8.5 4.457-16.866-1.385-18.542-9.246-.216-1.016-.256-2.068-.32-2.623zM26.026 14.136c-.148 6.45-4.293 12.076-10.047 13.46C8.79 29.326 1.47 24.413.263 16.993-.718 10.95 1.01 5.88 5.98 2.267c7.09-5.156 17.16-1.075 19.415 7.802.335 1.32.426 2.708.63 4.066z"/></g></svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  render() {
    let items = this.state.data.map(this._generateItem);
    let classLoading = classNames({
      'timeline-body': true,
      'loading': this.state.loading
    });
    return (
      <section className="timeline">
        <header className="timeline-header">
          <nav className="navTimeline">
            <ul className="navTimeline-list">
              <li className="navTimeline-item"><a className="navTimeline-link" href="">Tweets</a></li>
              <li className="navTimeline-item"><a className="navTimeline-link" href="">Tweets & replies</a></li>
              <li className="navTimeline-item"><a className="navTimeline-link" href="">Media</a></li>
            </ul>
          </nav>
        </header>
        <div className={classLoading}>
          {items}
        </div>
      </section>
    );
  }
}
