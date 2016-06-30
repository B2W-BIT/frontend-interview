import React from 'react';

export default class TrendsTopics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{trends:[]}]
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/trends';

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
    var topTrends = this.state.data[0]
    .trends.map(function(item, index){
      return item;
    })
    .filter(function(item, index){
      return index < 10;
    })
    .map(function(trend, index){
      return (
        <li className="trend-item" key={index}>
          <a href={trend.url}>{trend.name}</a>
          {trend.tweet_volume != null ? trend.tweet_volume + ' Tweets' : ''}
        </li>
      )
    });
    return (
      <div className="trend-box">
        <div className="box-header">
          <h4 className="box-title">Trends</h4>
        </div>
        <ul className="list">
          {topTrends}
        </ul>
      </div>
    )
  }
}
