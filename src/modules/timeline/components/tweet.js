import React, {Component, PropTypes} from 'react'
import '../styles/tweet.scss'
import { timeUtils } from '../../../helpers'
import verifiedIcon from '!svg-inline!../svg/verified.svg'

//
export const Tweet = ({
    user,
    in_reply_to_status_id,
    created_at,
    in_reply_to_screen_name,
    text,
    retweet_count,
    favorite_count,
}) => {

    created_at = new Date(created_at)

    return (
        <div className="tweet">
            <div className="tweet__profilepic">
                <img src={ user.profile_image_url } />
            </div>
            <div className="tweet__date">
                { `${created_at.getDate()} de ${timeUtils.monthName(created_at.getMonth())}`  }
            </div>
            <div>
                <strong className="tweet__name">{user.name}</strong>
                <span className="tweet__is_verified">
                    {
                        user.verified && (<span dangerouslySetInnerHTML={{ __html: verifiedIcon }} />)
                    }
                </span>
                <span className="tweet__screen_name">@{user.screen_name}</span>


            </div>
            {
                in_reply_to_status_id && (
                    <div className="tweet__in_reply">
                        Respondendo a @{in_reply_to_screen_name}
                    </div>
                )
            }
            <div className="tweet__text">
                { text }
            </div>
            
            <div className="tweet__actions flex flex-row">
                <div className="tweet__action -reply">
                    <i className="Icon -reply"></i>
                </div>
                <div className="tweet__action -retweet">
                    <i className="Icon -retweet"></i>
                    {
                        (retweet_count > 0 ) && retweet_count
                    }
                </div>
                <div className="tweet__action -like">
                    <i className="Icon -like"></i>
                    {
                        (favorite_count > 0) && favorite_count
                    }
                </div>
                <div className="tweet__action -message">
                    <i className="Icon -message"></i>
                </div>
            </div>
        </div>
    )

}
