import React from 'react';
import Tweet from './MobileTweet';
import throttle from '../utils/throttle';

export default class Timeline extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      lastID: 0,
      makeCall: true
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/stream?screen_name=americanascom';

    this._makeRequest(url);
    this._scrollListener();
  }

  _makeRequest(url, customHandle) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === xmlhttp.DONE) {
        if (xmlhttp.status === 200) {
          if(customHandle !== undefined){
            customHandle(xmlhttp.responseText);
          } else {
            this._handleResponse(xmlhttp.responseText);
          }
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

  _handleCustom(r) {
    let data = JSON.parse(r);
    let sliced = data.slice(1);

    this.setState({
      data: this.state.data.concat(sliced),
      makeCall: true
    });
  }

  _scrollListener() {
    window.addEventListener("scroll",
      throttle((event) => {
        if((document.body.scrollHeight - window.innerHeight) - window.scrollY < 200){
          var lastItem = this.state.data.length - 1;
          var lastID =  this.state.data[lastItem].id;

          if(this.state.makeCall){
            this.setState({
              makeCall: false
            })

            let url = 'http://ubuntu:8080/api/stream?screen_name=americanascom&count=21&max_id='+lastID;
            this._makeRequest(url, this._handleCustom.bind(this));
          }
        }
      }, 50)
    );
  }

  render(){
    var tweets = this.state.data.map(function(data, index){
      return <Tweet data={data} key={data.id}></Tweet>;
    });
    return (
      <div className="timeline">
        <div className="tabs-tweets-container">
          <div className="tabs-container">
            <ul className="list">
              <li>Tweets</li>
              <li>Tweets & replies</li>
              <li>Media</li>
            </ul>
          </div>
          <ul className="tweets-list">
            {tweets}
          </ul>
        </div>
      </div>
    );
  }
}
