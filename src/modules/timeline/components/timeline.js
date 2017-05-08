import React, {Component, PropTypes} from 'react'
import cuid from 'cuid'
import ReduxInfiniteScroll from 'redux-infinite-scroll'
import '../styles/mobile-timeline.scss'
import '../styles/timeline.scss'

import Loader from '../../loader/components/loader'
import { Tweet } from './tweet'

export const Timeline = ({
    isMobile,
    tweets,
    fetching,
    fetchType,
    functionToLoadNextData
}) => {

    if(isMobile) {
        return (
            <div className="mobile-timeline">
                <nav className="mobile-timeline__nav flex flex-row">
                    <div className={`mobile-timeline__nav-option flex ${fetchType == 'tweetsAndReplies' ? '-active': ''}`}>TWEETS</div>
                    <div className={`mobile-timeline__nav-option flex ${fetchType == 'media' ? '-active': ''}`}>MÍDIA </div>
                </nav>
                <div>
                    {
                        fetching && (<Loader />)
                    }
                    {

                        (!fetching && tweets && tweets.length > 0) &&  (
                            <ReduxInfiniteScroll
                            elementIsScrollable={false}
                            loader={<Loader />}
                            items={tweets.map(tweet => (
                               <Tweet isMobile={isMobile} key={cuid()} { ...tweet } />
                            ))}
                            loadMore={ functionToLoadNextData } />
                        )
                    }
                </div>
            </div>
        )
    }


    return (
        <div>
            <h1>TIMELINE</h1>
        </div>
    )
}
