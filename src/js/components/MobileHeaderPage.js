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

  _profileLink(){
    if(this.props.userInfo.entities){
      return this.props.userInfo.entities.url.urls[0].display_url;
    }

    return '';
  }

  render(){
    var furflesStyle = {
      backgroundImage: 'url(' + this.props.userInfo.profile_banner_url + '/ipad)',
    };
    return (
      <div className="header-page">
        <div className="cover-profile-pic">
          <div className="cover-container">
            <div className="furfles" style={furflesStyle}></div>
            {/*<img src={this.props.userInfo.profile_banner_url + '/ipad'} />*/}
          </div>
          <div className="wrap">
            <div className="profile-pic">
              <img src={this._profileImagePic()} />
            </div>
          </div>
        </div>
        <div className="header-profile-info">
          <div className="wrap">
            <div className="info-content">
              <div className="btns-container">
                <button className="btn btn-gear">
                  <span className="icon icon-gear"></span>
                </button>
                <button className="btn btn-follow">
                  <span className="icon icon-plus-person"></span>
                  Follow
                </button>
              </div>
              <p className="user-name">{this.props.userInfo.name}</p>
              <p className="screen-name">@{this.props.userInfo.screen_name}</p>
              <p className="user-bio">{this.props.userInfo.description}</p>
              <p className="user-location">
                {this.props.userInfo.location}
              </p>
              <p className="user-site">
                {this._profileLink()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
