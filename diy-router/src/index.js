import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {string,func} from "prop-types";
import webRouter from "./webRouter";

class App extends Component {
	constructor(props) {
		super(props);
		webRouter.subscribe(this.rerender);
	}
	rerender = ()=>{
		this.forceUpdate();
	}
    render() { 
    	return (
	    	<div>
		    	<Link path="/javascript">Javascript</Link>
		    	<br />
		    	<Link path="/haskell">Haskell</Link>
		    	<br />
		    	<Link path="/coffescript">CoffeeScript</Link>
		    	<hr />
		    	<Route path="/javascript" component={JavaScript} />
		    	<Route path="/haskell" component={Haskell} />
		    	<Route path="/coffescript" component={CoffeeScript} />
		    </div>
		)};
}

const Link = (props) => {
	const navigate = (e)=>{
		e.preventDefault();
		webRouter.navigateTo(props.path);
	}
    return (<a href="" onClick={navigate}>{props.children}</a>);
}
Link.propTypes = {
	path: string.isRequired,
	children: string.isRequired
}
const Route = ({path,component: Component})=>{
	if(webRouter.path() === path) {
		return <Component />;
	}
	return null;
}
Route.propTypes = {
	path: string.isRequired,
	component: func.isRequired
}


const JavaScript = () => { return <h1>JavaScript Info</h1> }
const Haskell = () => { return <h1>Haskell Info</h1> }
const CoffeeScript = () => { return <h1>CoffeeScript Info</h1> }

ReactDOM.render(<App />, document.getElementById('root'));