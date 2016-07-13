import React, { Component, PropTypes } from 'react';
import MakeRequestJson from '../utils/request';

export default class WidgetTrends extends Component {

  constructor(props) {
    super(props);

    this.state = {data: []};
    this._generateItem = this._generateItem.bind(this);
  }

  componentDidMount() {
    let me = this;

    MakeRequestJson({ url: '/1.1/trends/place.json?id=23424768'}).then((data) => {
      me.setState({
        data: data[0].trends
      });
    });
  }

  _generateItem(item, index) {
    return (
      <li className="widgetTrends-item" key={index}>
        <a className="widgetTrends-link" href="">
          <strong className="widgetTrends-name">{item.name}</strong>
          {item.tweet_volume ? <span className="widgetTrends-stats">{item.tweet_volume} Tweets</span> : ''}
        </a>
      </li>
    );
  }

  render() {
    let items = this.state.data.map(this._generateItem).filter(function(item, index){
      return index < 10;
    });
    return (
      <section className="widgetTrends">
        <header className="widgetTrends-header">
          <h3 className="widgetTrends-header-title">Trends</h3>
          <button className="widgetTrends-header-link" type="button">Change</button>
        </header>
        <div className="widgetTrends-body">
          <ul className="widgetTrends-list">
            {items}
          </ul>
        </div>
      </section>
    );
  }
}
