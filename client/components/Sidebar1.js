import React from 'react';
import Tweet from './Tweet';


export default class Sidebar1 extends React.Component {

	 render() {
    	return (
    		<div className="col-lg-3 col-md3 col-sm-3 hidden-xs profile-description">
                <div className="profile-pic"><img src="../images/profile.png"/></div>
                <div className="profile-wrapper">
                    <h1>americanas.com<img src="https://i0.wp.com/castercomm.com/wp-content/uploads/2016/07/Twitter-checkmark.png?resize=316%2C316"/></h1>
                    <span className="twitter-id">@americanascom</span>
                    <p>Bem vindo ao twitter oficial da <span className="highlight">americanas.com</span>! Um espaço especial para aproveitar ofertas exclusivas, promoções e ficar por dentro das nossas novidades</p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Brasil<br/>
                    <i className="fa fa-link" aria-hidden="true"></i> <a href="http://www.americanas.com">americanas.com</a><br/>
                    <i className="fa fa-calendar" aria-hidden="true"></i>Joined April 2009<br/>
                    <button className="btn btn-default">Tweet to americanas.com</button>
                    <div className="followers-list">
                        <i className="fa fa-user" aria-hidden="true"></i>1 Follower you know
                    </div>
                    <div className="photos-list">
                        <i className="fa fa-camera" aria-hidden="true"></i> 297 photos and videos
                    </div>
                </div>
     		</div>
    	);
    }
}