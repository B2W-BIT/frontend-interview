import React from 'react';

import * as Services from '../utils/services'


export default class WhoToFollow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: []
    }
  }

  async componentWillMount() {
    try {
      const suggestions = []
      const userSuggestions = await Services.getSuggestions()
      userSuggestions.map((userSuggestion, key) => {
        if (key < 3) {
          suggestions.push(userSuggestion)
        }
      })
      this.setState({
        suggestions: suggestions,
      })
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const {
        suggestions
    } = this.state
    return (
      <div className="who-to-follow">
        <div className="head">
          <h3>Who to Follow</h3>
          <a href="">Refresh</a>
          <a href="">View All</a>
        </div>
        <div className="content">
          { suggestions.map( (suggestion, key) => <User key={key} user={suggestion} />)}
        </div>
        <div className="foot">
          <a href="">Find friends</a>
        </div>
      </div>
    );
  }
}

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
        user
    } = this.props
    return (
      <div className="user">
        <div className="avatar">
          <a href={user.url}><img src={user.profile_image_url} alt="" /></a>
        </div>
        <div className="text">
          <a href={user.url} className="name">{user.name}</a> <span>@{user.screen_name}</span>
        </div>
        <div className="follow">
          <span className="Icon Icon--follow" />
          <p>Folow</p>
        </div>
      </div>
    );
  }
}
