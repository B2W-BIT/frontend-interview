import React, {Component, PropTypes} from 'react'
import '../styles/sidebar.scss'

import { timeUtils, twitterHelpers } from '../../../helpers'
import verifiedIcon from '!svg-inline!../svg/verified.svg'

const parseProfilePicUrl = url => {
    return url.replace('normal', 'reasonably_small')
}

export const Sidebar = ({
    name,
    verified,
    screen_name,
    description,
    location,
    url,
    friends_count,
    followers_count,
    created_at,
    profile_image_url,
    followersYouKnow,
    mediaPosts
}) => {
    created_at = new Date(created_at)
    return (
        <div className="sidebar">
            <div className="sidebar__profile-pic">
                <img src={ parseProfilePicUrl(profile_image_url) } />
            </div>
            <div className="sidebar__name-container">
                <h1>
                    <div>
                        <span className="sidebar__name">{ name }</span>
                        <span className="sidebar__verified">
                        {
                            verified && (<span dangerouslySetInnerHTML={{ __html: verifiedIcon }} />)
                        }
                        </span>
                    </div>
                    <small className="sidebar__screen_name">
                        @{ screen_name }
                    </small>
                </h1>

            </div>
            <div className="sidebar__description">
                { description }
            </div>
            <div className="sidebar__row">
                {
                    !!location && (<div className="sidebar__location">
                        { location }
                    </div>)
                }
                 <div>-</div>
                {
                    !!url && (<div className="sidebar__site">
                        <a href={ url }>{ url } </a>
                    </div>)
                }
            </div>

            <div className="sidebar__row hidden-lg hidden-md">
                {
                    !!friends_count && (
                        <div className="sidebar__following">
                            <strong>{ twitterHelpers.parseStats(friends_count) }</strong> SEGUINDO
                        </div>
                    )
                }
                {
                    !!followers_count && (
                        <div className="sidebar__followers-count">
                            <strong>{ twitterHelpers.parseStats(followers_count) }</strong> SEGUIDORES
                        </div>
                    )
                }

            </div>
            <div className="hidden-sm hidden-xs">
                {
                    !!created_at && (
                        <div className="sidebar__created_at">
                            Participa desde { timeUtils.monthName(created_at.getMonth()) } de { created_at.getFullYear() }
                        </div>
                    )
                }
                <div className="sidebar__followersYouKnow">
                    {
                        followersYouKnow(screen_name)
                    }
                </div>
                <div className="sidebar__media">
                    {
                        mediaPosts(screen_name)
                    }
                </div>
            </div>

        </div>
    )
}
