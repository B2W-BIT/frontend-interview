import React from 'react';

export default class WhoFollow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/who-follow';

    this._makeRequest(url);
  }

  _makeRequest(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === xmlhttp.DONE) {
        if (xmlhttp.status === 200) {
          this._handleResponse(xmlhttp.responseText);
        }
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  _handleResponse(r) {
    let data = JSON.parse(r);

    this.setState({
      data: data
    });
  }

  render() {
    var suggestions = this.state.data.filter(function(item, index){
      return index < 3;
    }).map(function(user, index){
      return (
        <li class="item" key={index}>
          <img className="follow-pic" src={user.profile_image_url} />
          <div className="item-content">
            <a href="#" className="follow-link">
              <span className="user-name">{user.name}</span>
              <span className="screen-name">@{user.screen_name}</span>
            </a>
            <button type="button" className="btn btn-follow">
              <span className="icon icon-plus-person"></span>
                Follow
            </button>
          </div>
        </li>
      )
    });

    return (
      <div className="who-follow-box">
        <div class="box-header">
          <h4 className="box-title">Who to follow</h4>
          <a href="#">Refresh</a>
          <a href="#">View all</a>
        </div>
          <ul className="list">
            {suggestions}
          </ul>
      </div>
    )
  }
}
