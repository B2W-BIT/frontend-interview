import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions/home';

import ErrorNotify from '../components/home/ErrorNotify';
import Loader from '../components/home/Loader';
import Timeline from '../components/home/Timeline';
import Header from '../components/home/Header';
import Profile from '../components/home/Profile';

function mapStateToProps(state) {
  return {
    timeline: state.timeline,
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(HomeActions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  static propTypes = {
    timeline: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.getTimeline();
    this.props.actions.getProfile();
  }

  render() {
    const { timeline, profile, actions } = this.props;

    const stats = {
      tweetCount: profile.data.statuses_count,
      followingCount: profile.data.friends_count,
      followersCount: profile.data.followers_count,
      likesCount: profile.data.favourites_count
    };

    return (
      <div>
        <Header coverPhoto={profile.data.profile_banner_url} bgColor={profile.data.profile_background_color} stats={stats} />
        <Profile profile={profile} />

        { timeline.loading ? <Loader /> : null }
        { timeline.error ? <ErrorNotify message={timeline.error} /> : null }

        <Timeline tweets={timeline.tweets} />
      </div>
    );
  }
}
