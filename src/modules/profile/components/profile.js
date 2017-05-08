import React, {Component, PropTypes} from 'react'
import '../styles/profile.scss'

import CoverPhoto from './cover_photo'
import SidebarContainer from '../../sidebar/'
import TimelineContainer from '../../timeline/'
import FollowingStats from './following-stats'
import { isMobile } from '../../../helpers'

const coverPhotoSize = isMobile ? "600x200" : "1500x500"

const Profile = ({ profile }) => {
    console.log(profile)
    return (
        <div className="profile">
            <CoverPhoto photoURL={ `${profile.profile_banner_url}/${coverPhotoSize}` }  />
            <FollowingStats { ...profile } />
            <SidebarContainer { ...profile } />
            <div className="container">
                <TimelineContainer profile={ profile } />
            </div>
        </div>
    )
}

export default Profile
