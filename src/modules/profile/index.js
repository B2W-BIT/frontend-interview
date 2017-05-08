/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
/*Custom imports*/

import Profile from './components/profile'
import Loader from './components/loader'

import { fetchProfileAction } from './actions'

class ProfileContainer extends Component{

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {
            params,
            redirectToAmericanas,
            fetchProfile,
            fetched,
        } = this.props

        if(!params.screen_name) {
            redirectToAmericanas()
        } else {
            (!fetched) && fetchProfile(params.screen_name)
        }
    }

    render() {
        if (!this.props.fetched) {
            return (
                <Loader />
            )
        }
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = state => ({ ...state.profile })

const mapDispatchToProps = dispatch => {
    return {
        redirectToAmericanas: () => {
            dispatch(push('/americanascom'))
        },
        fetchProfile: screen_name => {
            dispatch(fetchProfileAction(screen_name))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
