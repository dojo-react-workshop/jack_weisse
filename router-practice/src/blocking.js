import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Prompt
} from "react-router-dom";

class BasicForm extends React.Component {
	state= {
		isBlocking:false,
		value:""
	}

	handleChange = (e)=>{
		if(e.target.value === "") {
			this.setState({
				isBlocking:false,
				value:e.target.value
			});
		} else {
			this.setState({
				isBlocking:true,
				value:e.target.value
			});
		}
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		this.setState({
			isBlocking:false,
			value:""
		});
	}

	render() {
		return (
			<div>
				<h3>
					Blocking? {(this.state.isBlocking ? "Yes,click a link or back button" : "Nope")}
				</h3>
				<Prompt when={this.state.isBlocking} message={(location)=>{
					return `Are you sure you want to go to ${location.pathname}?`;
				}}/>
				<form onSubmit={this.handleSubmit}>
					<input type="text" size="50" placeholder="type something to block transitions" value={this.state.value} onChange={this.handleChange} />
					<br />
					<input type="submit" value="Submit to stop blocking" />
				</form>
			</div>
		);
	}
}

const Blocking = (props)=>{
	return (
		<Router>
			<div>
				<ul>
					<li><Link to="/">Form</Link></li>
					<li><Link to="/one">One</Link></li>
					<li><Link to="/two">Two</Link></li>
				</ul>
				<Route exact path="/" component={BasicForm} />
				<Route path="/one" render={()=>{return (<h3>one</h3>);}} />
				<Route path="/two" render={()=>{return (<h3>two</h3>);}} />
			</div>
		</Router>
	);
}

export default Blocking;