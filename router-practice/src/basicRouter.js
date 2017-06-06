import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

const Home = (props) => {
	return (<h2>Home</h2>);
}

const About = (props) => {
	return (<h2>About</h2>);
}

const Topic = (props)=>{
	return (
		<h3>{props.match.params.topicId}</h3>
	);
}

const Topics = (props) => {
	return (
		<Route>
			<div>
				<h2>Topics</h2>
				<ul>
					<li><Link to={`${props.match.url}/render`}>Rendering with React</Link></li>
					<li><Link to={`${props.match.url}/components`}>Components</Link></li>
					<li><Link to={`${props.match.url}/propsvstate`}>Props vs. State</Link></li>
				</ul>
				<Route path={`${props.match.url}/:topicId`} component={Topic} />
				<Route exact path={`${props.match.url}`} render={()=>{return (<h3>Pick a Topic</h3>);}} />
			</div>
		</Route>);
}

const BasicRouter = ()=> {
	return (
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/topics">Topics</Link></li>
				</ul>
				<hr />
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />
			</div>
		</Router>
	);
}

export default BasicRouter;