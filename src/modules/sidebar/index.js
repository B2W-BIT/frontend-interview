/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
/*Custom imports*/

import { Sidebar } from './components/sidebar'

class SidebarContainer extends Component {

    constructor(props) {
        super(props)
    }

    followersYouKnow(screen_name) {
        return ""
    }

    mediaPosts(screen_name) {
        return ""
    }

    render() {
        return (
            <Sidebar {...this.props} followersYouKnow={this.followersYouKnow} mediaPosts={this.mediaPosts} />
        )
    }
}

const mapStateToProps = state => ({ ...state.users })

const mapDispatchToProps = dispatch => {
    return {
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
