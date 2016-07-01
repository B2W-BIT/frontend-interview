import React from 'react';

export default class FollowersBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    let url = window.location.origin + '/api/followers';

    this._makeRequest(url);
  }

  componentWillMount(){
    console.log(navigator.userAgent);
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
      followers: data.users
    });
  }

  render() {
    var followers = this.state.followers.map(function(data, index){
      // return <Tweet data={data} key={data.id}></Tweet>;
      return (
        <li key={data.id}>
          <img src={data.profile_image_url} />
        </li>
      );
    });
    return (
      <div className="followers-box">
        <p className="title">
          <span className="icon icon-person"></span>
          X Followers you know
        </p>
        <ul className="list">
          {followers}
        </ul>
      </div>
    )
  }
}
