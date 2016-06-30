import React from 'react';
import classNames from 'classnames';

export default class HeaderPage extends React.Component {
  _profileImagePic() {
    if(this.props.userInfo.profile_image_url != undefined){
      return this.props.userInfo.profile_image_url.split('_normal').join('');
    } else {
      return '';
    }
  }

  _verifiedAcc() {
    if(this.props.userInfo.verified){
      return (
        <span class="icon icon-verified"></span>
      );
    } else {
      return '';
    }
  }

  _isLocked() {
    if(this.props.headerLocked){
      return ' furfles';
    } else {
      return '';
    }
  }

  render(){
    var profileHeaderClass = classNames({
      'header-page': true,
      'is-locked': this.props.headerLocked
    });
    var profileMiniClass = classNames({
      'profile-mini': true,
      'is-locked': this.props.headerLocked
    });
    return (
      <div className={profileHeaderClass}>
        <div className="cover-profile-pic">
          <div className="cover-container">
            <img src={this.props.userInfo.profile_banner_url + '/1500x500'} />
          </div>
          <div className="wrap">
            <div className="profile-pic">
              <img src={this._profileImagePic()} />
            </div>
          </div>
        </div>
        <div className="header-profile-info">
          <div className="wrap">
            <div className={profileMiniClass}>
              <div className="mini-pic">
                <img src={this.props.userInfo.profile_image_url} />
              </div>
              <div className="mini-info">
                <span className="name">
                  {this.props.userInfo.name}
                  {this._verifiedAcc()}
                </span>
                <span className="screen-name">
                  @{this.props.userInfo.screen_name}
                </span>
              </div>
            </div>
            <div className="infos-misc">
              <a href="#" className="info-item active">
                <span className="title">tweets</span>
                <span className="count">{this.props.userInfo.statuses_count}</span>
              </a>
              <a href="#" className="info-item">
                <span className="title">following</span>
                <span className="count">{this.props.userInfo.friends_count}</span>
              </a>
              <a href="#" className="info-item">
                <span className="title">followers</span>
                <span className="count">{this.props.userInfo.followers_count}</span>
              </a>
              <a href="#" className="info-item">
                <span className="title">likes</span>
                <span className="count">{this.props.userInfo.favourites_count}</span>
              </a>
              <a href="#" className="info-item">
                <span className="title">lists</span>
                <span className="count">{this.props.userInfo.listed_count}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
