import React, {Component, PropTypes} from 'react'
import '../styles/following-stats.scss'
import { twitterHelpers } from '../../../helpers'

const FollowingStats = ({
    statuses_count,
    friends_count,
    followers_count,
    favourites_count,
}) => {
    return (
        <div className="hidden-sm hidden-xs">
            <div className="pull-right">
                <button className="btn btn-default btn-follow">
                    <i className="Icon -follow"></i> Seguir
                </button>
            </div>
            <div>TWEETS <strong>{ twitterHelpers.parseStats(statuses_count) }</strong></div>
            <div>FOLLOWING <strong>{ twitterHelpers.parseStats(friends_count) }</strong></div>
            <div>FOLLOWERS <strong>{ twitterHelpers.parseStats(followers_count) }</strong></div>
            <div>LIKES <strong>{ twitterHelpers.parseStats(favourites_count) }</strong></div>
        </div>
    )
}


export default FollowingStats
