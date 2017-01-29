import io from 'socket.io-client';
import React from 'react';
import Tweet from './Tweet';



export default class Header extends React.Component {

	 render() {
    	return (
    		<div>
    			<div className="top-user row">	
    				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
	    				<ul className="main-list">
	    					<a href="#"><li>Home</li></a>
	    					<a href="#"><li>Moments</li></a>
	    					<a href="#"><li>Notifications</li></a>
	    					<a href="#"><li>Messages</li></a>
	    				</ul>
    				</div>
    				<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-2">
    					<a href="#">
    						<img className="twitter-img" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
    					</a>
    				</div>
    				<div className="col-lg-2 col-md2 col-sm-2 col-xs-4">
						<div className="form-group has-feedback-left">
						    <input type="text" className="form-control" placeholder="Search Twitter" />
						    <i className="glyphicon glyphicon-search form-control-feedback"></i>
						</div>
    				</div>
    				<div className="col-lg-2 col-md2 col-sm-2 hidden-xs">
    					<img className="img-top-user-1" src="../images/img-top-user-1.png" />
    					<img className="img-top-user-2" src="../images/img-top-user-2.png" />
    				</div>
    			</div>
    			<header>
	    			<div>

	    			</div>
    			</header>
    		</div>
    		);
    }
}
