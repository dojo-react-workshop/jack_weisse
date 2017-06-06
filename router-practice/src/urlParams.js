import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

const Id = (props)=>{
	return (
		<h3>{`ID: ${props.match.params.id}`}</h3>
	);
}

const UrlParams = (props)=>{
	return (
		<Router>
			<div>
				<h1>Accounts</h1>
				<ul>
					<li><Link to="/netflix">Netflix</Link></li>
					<li><Link to="/zillow-group">Zillow Group</Link></li>
					<li><Link to="/yahoo">Yahoo</Link></li>
					<li><Link to="/modus-create">Modus Create</Link></li>
				</ul>
				<Route path="/:id" component={Id} />
			</div>
		</Router>
	);
}

export default UrlParams;