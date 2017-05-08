/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
/*Custom imports*/

import { Timeline } from './components/timeline'
import { fetchTimelineAction } from './actions'
import { isMobile } from "../../helpers"

class TimelineContainer extends Component{

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {
            mustFetch,
            fetchType,
            fetchTimelineAction,
            profile,
            changeFetchingMode,
        } = this.props
        if(mustFetch) {
            fetchTimelineAction(fetchType, profile.screen_name)
        }
    }

    loadMoreData() {
        const {
            infiniteScrolling,
            fetchType,
            lastCursors,
            profile,
        } = this.props

        console.log(fetchType, profile.screen_name, lastCursors[fetchType])

        fetchTimelineAction(fetchType, profile.screen_name, lastCursors[fetchType])

    }

    render() {
        const { tweetList, fetchType } = this.props
        console.log(tweetList[fetchType])
        return (
            <Timeline functionToLoadNextData={this.loadMoreData.bind(this)} tweets={ tweetList[fetchType] } isMobile={isMobile()} {...this.props} />
        )
    }
}
const mapStateToProps = state => ({ ...state.timeline })

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTimelineAction: (fetchType, screen_name, last_cursor) => dispatch(fetchTimelineAction(fetchType, screen_name, last_cursor)),
        changeFetchingMode: fetchType => dispatch({type: "CHANGE_TIMELINE_FETCHING_MODE", fetchType}),
        infiniteScrolling: (lastCursor, fetchType) => dispatch({
            type: "SCROLLED_TIMELINE",
            fetchType,
            lastCursor}),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer)
