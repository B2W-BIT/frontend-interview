import React, {Component} from 'react'
import img from '../../../public/assets/images/capa.jpg'
import '../../../public/assets/css/style.css'
import NavBottonHeader from '../Header/NavBotton'
import TabContent from '../Timeline/TabContent';
import TabLi from '../Timeline/TabLi'
import Post from '../Timeline/Post'
import {connect} from 'react-redux'
import {fotoCapa} from '../../Action/Timeline'
import { forEach } from "lodash"

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ativoAtual: 'tweets',
            ativoLi: 'tweets',
            fotoCapa: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.fotoCapa();
    }

    handleClick(e) {
        e.preventDefault();
        //console.log(e.target.id);
        this.setState({ ativoAtual: e.target.id });
        this.setState({ ativoLi: e.target.id });
    }

    fotoCapa(){
        this.props.fotoCapa().then((success) => {
            var fotoCapa = this.state.fotoCapa;
            this.setState({ fotoCapa: success.data });
        });
    }

    render () {
        return (
            <div>
                <div className="top-header">
                    <div className="top-book">
                        <img src={this.state.fotoCapa}/>
                    </div>
                </div>
                <NavBottonHeader />

                <div className="tabs-content">
                    <ul>
                        <TabLi clicado={this.state.ativoLi == "tweets"} Content={<li className="tt-li" id="tweets" onClick={this.handleClick}>Tweets e respostas</li>} />
                        <TabLi clicado={this.state.ativoLi == "midia"} Content={<li className="tt-li" id="midia" onClick={this.handleClick}>Mídia</li>} />
                    </ul>
                 </div>

                 <TabContent ativo={this.state.ativoAtual == "tweets"} Content={<Post  />} />
                 <TabContent ativo={this.state.ativoAtual == "midia"} Content={"Mídia"} />
            </div>
        )
    }
}

Header.propTypes = {
    fotoCapa: React.PropTypes.func.isRequired,
}

export default connect(null, {fotoCapa})(Header);