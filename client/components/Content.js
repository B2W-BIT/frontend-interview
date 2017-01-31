import React from 'react';
import Tweet from './Tweet';
import ReactDOM from 'react-dom';
import TwitterTimeline from './TwitterTimeline';
import TweetList from './TweetList';


import { Tab, TabList, Tabs, TabPanel } from 'react-context-tabs';

var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

export default class Content extends React.Component {

  render() {


    return (
    	<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
	    	<ul className="twitter-stats">
		    	<li className="active"> TWEETS <span className="highlight">19.7K</span> </li>
		    	<li> FOLLOWING <span className="highlight">756 </span></li>
		    	<li> FOLLOWERS <span className="highlight">231K</span> </li>
		    	<li> LIKES <span className="highlight">19</span> </li>
	    	</ul>
			<ul className="tabs" role="tablist">
			    <li>
			        <input type="radio" name="tabs" id="tab1"  />
			        <label htmlFor="tab1" 
			               role="tab" 
			               aria-selected="true" 
			               aria-controls="panel1" 
			               tabIndex="0">Tweets</label>
			        <div id="tab-content1" 
			             className="tab-content" 
			             role="tabpanel" 
			             aria-labelledby="description" 
			             aria-hidden="false">
			        	<TwitterTimeline user="americanascom" chrome="noheader" className="twitter-timeline" />
			        </div>
			    </li>
			  
			    <li>
			        <input type="radio" name="tabs" id="tab2" />
			        <label htmlFor="tab2"
			               role="tab" 
			               aria-selected="false" 
			               aria-controls="panel2" 
			               tabIndex="0">Tweets & Replies </label>
			        <div id="tab-content2" 
			             className="tab-content"
			             role="tabpanel" 
			             aria-labelledby="specification" 
			             aria-hidden="true">
			          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
			        </div>
			    </li>
			    <li>
			        <input type="radio" name="tabs" id="tab3" />
			        <label htmlFor="tab3"
			               role="tab" 
			               aria-selected="false" 
			               aria-controls="panel3" 
			               tabIndex="0">Media </label>
			        <div id="tab-content4" 
			             className="tab-content"
			             role="tabpanel" 
			             aria-labelledby="specification" 
			             aria-hidden="true">
			          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
			        </div>
			    </li>
			   	<li>
			        <input type="radio" name="tabs" id="tab4" />
			        <label htmlFor="tab4"
			               role="tab" 
			               aria-selected="false" 
			               aria-controls="panel4" 
			               tabIndex="0">Stream <span className="new-badge">new</span></label>
			        <div id="tab-content4" 
			             className="tab-content"
			             role="tabpanel" 
			             aria-labelledby="specification" 
			             aria-hidden="true">
			        	<TweetList data={initialState} />
			        </div>
			    </li>
			</ul>
		</div>
    )
  }
}