/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from'./components/Header.js'

import TweetList from './components/TweetList';


var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

export default class Main extends React.Component{


	render(){
		return(
			    <div>
			    	<Header/>
				     <TweetList data={initialState} />
				</div> 
			);
	}
}


ReactDOM.render(<Main />,document.getElementById('root'));


