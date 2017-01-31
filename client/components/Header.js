import io from 'socket.io-client';
import React from 'react';
import Tweet from './Tweet';



export default class Header extends React.Component {

	 render() {
    	return (
    		<div>
    			<div className="container">
    				<div className="top-user row">	
	    				<div className="col-lg-5 col-md-4 col-sm-4 col-xs-12">
		    				<ul className="main-list">
		    					<a href="#"><li><img src="../images/house.png" />Home</li></a>
		    					<a href="#"><li><img src="../images/thunder.png" />Moments</li></a>
		    					<a href="#"><li><img src="../images/bell.png" />Notifications</li></a>
		    					<a href="#"><li><img src="../images/messages.png" />Messages</li></a>
		    				</ul>
	    				</div>
	    				<div className="col-lg-2 col-md-2 col-sm-2  hidden-xs col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
	    					<a href="#">
	    						<img className="twitter-img" src="http://www.freeiconspng.com/uploads/twitter-icon-download-18.png" />
	    					</a>
	    				</div>
	    				<div className="col-lg-2 col-md-2 col-sm-2 hidden-xs">
							<div className="form-group has-feedback-left">
							    <input type="text" className="form-control" placeholder="Search Twitter" />
							    <i className="glyphicon glyphicon-search form-control-feedback"></i>
							</div>
	    				</div>
	    				<div className="col-lg-2 col-md-2 col-sm-2 hidden-xs">
	    					<img className="img-top-user-1" src="../images/img-top-user-1.png" />
	    					<img className="img-top-user-2" src="../images/img-top-user-2.png" />
	    				</div>
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
