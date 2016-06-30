import React from 'react';
import dateFormat from '../utils/dateFormat';
import dateDiff from '../utils/dateDiff';

export default class Tweet extends React.Component {
  _parsedText() {
    var text = this.props.data.text;
    var base_url = 'http://twitter.com/';
    var hashtag_part = 'search?q=#';

    text = text.replace(
        /(>|<a[^<>]+href=['"])?(https?:\/\/([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.,]*[^ !#?().,])?)/gi,
        function($0, $1, $2) {
            return ($1 ? $0 : '<a href="' + $2 + '" target="_blank">' + $2 + '</a>');
        });
    text = text.replace(
        /(:\/\/|>)?\b(([-a-z0-9]+\.)+[a-z]{2,5}(\/[-a-z0-9!#()\/?&.]*[^ !#?().,])?)/gi,
        function($0, $1, $2) {
            return ($1 ? $0 : '<a href="http://' + $2 + '">' + $2 + '</a>');
        });
    text = text.replace(
        /(:\/\/|>)?(@([_a-z0-9\-]+))/gi,
        function($0, $1, $2, $3) {
            return ($1 ? $0 : '<a href="' + base_url + $3
                + '" title="Follow ' + $3 + '" target="_blank">@' + $3
                + '</a>');
        });
    text = text.replace(
        /(:\/\/[^ <]*|>)?(\#([_a-zÀ-ÿ0-9\-]+))/gi,
        function($0, $1, $2, $3) {
            return ($1 ? $0 : '<a href="' + base_url + hashtag_part + $3
                + '" title="Search tag: ' + $3 + '" target="_blank">#' + $3
                + '</a>');
        });

    return {__html: text};
  }

  _tweetDate() {
    var time = this.props.data.created_at;
    var fullDate = dateFormat(time, 'hh:mm TT - dd mmm yyyy');

    return (
      <span>
        <span class="time-elapsed">{this._tweetTimeDiff(time)}</span>
        <span className="date-tooltip">{fullDate}</span>
      </span>
    )
  }

  _tweetTimeDiff(time) {
    var nowTime = new Date().getTime();
    var tweetTime = new Date(time);
    var diffTime = dateDiff(nowTime, tweetTime);

    // console.log(diffTime);

    switch (true) {
      case (diffTime < 1 ):
        return 'now';
        break;
      case (diffTime < 60):
        return diffTime+'min';
        break;
      case (diffTime < (60 * 24)):
        return Math.round(diffTime/60)+'h';
        break;
      case (diffTime < (24 * 365)):
        return dateFormat(time, 'mmm d');
        break;
      default:
        return dateFormat(time, 'd mmm yyyy');
    }
  }

  render() {
    return (
      <li className="tweet-item" key={this.props.data.id}>
        <div className="tweet-header">
          <a href="#" className="profile-link">
            <span className="full-name">{this.props.data.user.name}</span>&nbsp;
            <span className="screen-name">@{this.props.data.user.screen_name}</span>
          </a>&nbsp;-&nbsp;
          <a href="#">
            <span className="date">{this._tweetDate()}</span>
          </a>
          <img className="avatar" src={this.props.data.user.profile_image_url} />
        </div>
        <p className="tweet-text" dangerouslySetInnerHTML={this._parsedText()}></p>
        <div className="action-buttons-container">
          <div className="btn-action action-reply">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-reply"></span>
                <span className="icon-tooltip">Reply</span>
              </div>
            </button>
          </div>
          <div className="btn-action action-retweet">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-retweet"></span>
                <span className="icon-tooltip">Retweet</span>
              </div>
            </button>
          </div>
          <div className="btn-action action-like">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-heart"></span>
                <span className="icon-tooltip">Like</span>
              </div>
            </button>
          </div>
          <div className="btn-action action-misc-menu">
            <button className="btn" type="button">
              <div className="icon-container">
                <span className="icon icon-3dots"></span>
                <span className="icon-tooltip">Misc</span>
              </div>
            </button>
          </div>
        </div>
      </li>
    )
  }
}
