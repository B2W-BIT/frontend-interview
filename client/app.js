/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from'./components/Header.js';
import Sidebar1 from'./components/Sidebar1.js';
import Sidebar2 from'./components/Sidebar2.js';

import TweetList from './components/TweetList';


var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

export default class Main extends React.Component{


	render(){
		return(
			    <div>
			    	<Header/>
			    	<div className="container">
				    	<Sidebar1/>
				    	<TweetList data={initialState} />
				    	<Sidebar2/>
			    	</div>
				    
				</div> 
			);
	}
}


ReactDOM.render(<Main />,document.getElementById('root'));


