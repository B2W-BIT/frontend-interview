import React from 'react';
import Tweet from './Tweet';



export default class Sidebar1 extends React.Component {

	 render() {
    	return (
    		<div className="col-lg-3 col-md3 col-sm-3 col-xs-12 profile-description">
                <div className="profile-pic"><img src="../images/profile.png"/></div>
                <h1>americanas.com</h1>
                <span className="twitter-id">@americanascom</span>
                <p>Bem vindo ao twitter oficial da <span>americanas.com</span>! Um espaço especial para aproveitar ofertas exclusivas, promoções e ficar por dentro das nossas novidades</p>
                <i class="fa fa-map-marker" aria-hidden="true"></i> Brasil
                <i class="fa fa-link" aria-hidden="true"></i> <a href="http://www.americanas.com">americanas.com</a>
                <i class="fa fa-calendar" aria-hidden="true"></i>Joined April 2009
                <button>Tweet to americanas.com</button>
     		</div>
    	);
    }
}