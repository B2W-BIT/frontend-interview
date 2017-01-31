import React from 'react';
import Tweet from './Tweet';

import ReactDOM from 'react-dom';
import TwitterTimeline from './TwitterTimeline';



export default class Sidebar2 extends React.Component {
	 render() {
    	return (
    		<div className="col-lg-3 col-md3 col-sm-3 hidden-xs">
            	<div className="sidebar2">
	            	<div className="who-to-follow">
	            		<h4>Who to Follow</h4>
	            		<span>&middot; Refresh&middot; View all</span>
	            		<div className="col-lg-12 col-md-12 col-sm-12">
		            		<div className="box-to-follow row">
		            			<div className="col-lg-1 col-md-2 col-sm-2">
		            				<img src="../images/follow1.png"/>
		            			</div>
		            			<div className="col-lg-9 col-md-9 col-sm-9">
		            				<div className="wrap">
		            					<span className="twitter-name">Jakob Lilvik</span>
		            				</div><span className="twitter-id">@Jlilvik</span>
		            				<span className="inherit-name">Followed by Priscilla Barella</span>
		            				<button className="btn"><i className="fa fa-user-plus"></i> Follow</button>
		            			</div>
		            			<div className="col-lg-1 col-md-1 col-sm-1">
		            				<i className="fa fa-times" aria-hidden="true"></i>
		            			</div>
		            		</div>
		            		<div className="box-to-follow row">
		            			<div className="col-lg-1 col-md-2 col-sm-2">
		            				<img src="../images/follow2.png"/>
		            			</div>
		            			<div className="col-lg-9 col-md-9 col-sm-9">
		            				<div className="wrap">
		            					<span className="twitter-name">it pobrinha</span>
		            				</div><span className="twitter-id">@camissantoro</span>
		            				<span className="inherit-name">Followed by Priscilla Barella</span>
		            				<button className="btn"><i className="fa fa-user-plus"></i> Follow</button>
		            			</div>
		            			<div className="col-lg-1 col-md-1 col-sm-1">
		            				<i className="fa fa-times" aria-hidden="true"></i>
		            			</div>
		            		</div>
		            		<div className="box-to-follow row">
		            			<div className="col-lg-1 col-md-2 col-sm-2">
		            				<img src="../images/follow3.png"/>
		            			</div>
		            			<div className="col-lg-9 col-md-9 col-sm-9">
		            				<div className="wrap">
		            					<span className="twitter-name">Tirol</span>
		            				</div><span className="twitter-id">@TirolMatriz</span>
		            				<span className="inherit-name">Followed by Priscilla Barella</span>
		            				<button className="btn"><i className="fa fa-user-plus"></i> Follow</button>
		            			</div>
		            			<div className="col-lg-1 col-md-1 col-sm-1">
		            				<i className="fa fa-times" aria-hidden="true"></i>
		            			</div>
		            		</div>
							<span className="find-friends">find friends</span>
		            	</div>
	            	</div>    
	            	<div className="trend">
	            		<div className="col-lg-12 col-md-12 col-sm-12 title">
		            		<h4>Trends</h4>
		            		<span className="change">&middot;change</span> 
		            	</div>
		            		<div>
			            		<a href="#"><h5>SonsdaConquista</h5></a>
			            		<span><i className="fa fa-external-link-square" aria-hidden="true"></i>Promoted by Caixa</span>
			            		<a href="#"><h5>#SegundaGuerraMemeal</h5></a>
			            		<span>78.6K Tweets</span>
			            		<a href="#"><h5>Professor Jirafales</h5></a>
			            		<span>147k Tweets</span>
			            		<a href="#"><h5>#OITNB</h5></a>
			            		<span>279K Tweets</span>
			            		<a href="#"><h5>#SextaComOClubeSDV</h5></a>
			            		<span>13.7K Tweets</span>
			            		<a href="#"><h5>Éder</h5></a>
			            		<span>102K Tweets</span>
			            		<a href="#"><h5>#EuJaMentiQue</h5></a>
			            		<span>6,902 Tweets</span>
			            		<a href="#"><h5>Suécia</h5></a>
			            		<span>19.4K Tweets</span>
			            		<a href="#"><h5>República Tcheca x Croácia</h5></a>
			           
			            		<a href="#"><h5>#DemiOngGMA</h5></a>
			            		<span>44.5K Tweets</span>
			            		<a href="#"><h5>Gol da Itália</h5></a>
			            	</div>
		            	</div>    
		            </div>
	            </div>
    	);
    }
}