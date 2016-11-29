import React from 'react';
import moment from 'moment';

import * as Services from '../utils/services'
import { formatCount } from '../utils/constants'


export default class Trends extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      trends: []
    }
  }

  async componentWillMount() {
    try {
      const trends = []
      const usertrends = await Services.getTrends()
      usertrends.map((userSuggestion, key) => {
        if (key < 10) {
          trends.push(userSuggestion)
        }
      })
      this.setState({
        trends: trends
      })
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const {
        trends
    } = this.state
    return (
      <div className="trends">
        <div className="head">
          <h3>Trends</h3>
          <a href="">Change</a>
        </div>
        <div className="content">
          { trends.map( (trend,key) => <Topic key={key} topic={trend} />)}
        </div>
      </div>
    );
  }
}

class Topic extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  render() {
    const {
        topic
    } = this.props
    const count = topic.tweet_volume ? formatCount(topic.tweet_volume) : null
    return (
      <div className="topic">
        <a href={topic.url}>
          <span className="name">{topic.name}</span>
          <span className="description">{topic.description}</span>
          <span className="count">{count} Tweets</span>
        </a>
      </div>
    );
  }
}
