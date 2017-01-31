import React from 'react';
import ReactDOM from 'react-dom';
import Header from'./components/Header.js';
import Sidebar1 from'./components/Sidebar1.js';
import Sidebar2 from'./components/Sidebar2.js';
import Content from './components/Content.js';

export default class Main extends React.Component{


	render(){
		return(
			    <div>
			    	<Header/>
			    	<div className="major-wrapper">
				    	<div className="container">
					    	<Sidebar1/>
					    	<Content/>
					    	<Sidebar2/>
				    	</div>
			    	</div>
				    
				</div> 
			);
	}
}


ReactDOM.render(<Main />,document.getElementById('root'));


