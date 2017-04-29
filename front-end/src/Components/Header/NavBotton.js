import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSeguidores, getSeguindo} from '../../Action/Timeline'
import { forEach } from "lodash"

class NavBotton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            seguindo: []
        }
        this.handleTweets();
        this.handleSeguindo();
    }

    handleTweets(){
        this.props.getSeguidores().then((success) => {
            var tweets = this.state.tweets;
            this.setState({ tweets: success.data });
        });
    }

    handleSeguindo(){
        this.props.getSeguindo().then((success) => {
            var seguindo = this.state.seguindo;
            this.setState({ seguindo: success.data });
        });
    }

    render () {
        return (
            <div>
                <div className="nav-header-botton">
                    <div className="center-nav-botton">
                        <div className="ind-no-margin ind-nav-header">
                            <p>tweets</p>
                            <span>0</span>
                        </div>
                        <div className="ind-nav-header">
                            <p>seguindo</p>
                            <span>{this.state.seguindo}</span>
                        </div>
                        <div className="ind-nav-header">
                            <p>seguidores</p>
                            <span>{this.state.tweets}</span>
                        </div>
                        <div className="ind-nav-header">
                            <p>curtidas</p>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

NavBotton.propTypes = {
    getSeguidores: React.PropTypes.func.isRequired,
    getSeguindo: React.PropTypes.func.isRequired
}

export default connect(null, {getSeguidores, getSeguindo})(NavBotton);