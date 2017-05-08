/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
/*Custom imports*/

import { App } from './components/app'

class AppContainer extends Component{

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <App {...this.props}>
                { this.props.children }
            </App>
        )
    }
}

const mapStateToProps = state => ({ ...state.app })

const mapDispatchToProps = (dispatch) => {
    return {}

}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
