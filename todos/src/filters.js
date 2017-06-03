import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';

class Filters extends Component {

	setFilter = (e)=>{
		this.props.setFilter(e.target.value);
	}

	clear = ()=>{
		this.props.clear();
	}

	render() {
		let filterClass = "hidden";
		let text = " items left";
		if(this.props.numTodos > 0) {
			filterClass = "footer";
			if(this.props.numTodos === 1) {
				text = " item left";
			} else {
				text = " items left";
			}
		}

		let allClass = "";
		let activeClass = "";
		let completeClass = "";
		if(this.props.filter==="all") {
			allClass = "selected";
		} else if(this.props.filter==="active") {
			activeClass = "selected";
		} else if(this.props.filter==="complete") {
			completeClass = "selected";
		}

		return (
			<footer className={filterClass}>
	            <span className="todo-count"><strong>{this.props.numActive}</strong>{text}</span>
	            <ul className="filters">
		            <li>
		            	<a className={allClass}><button onClick={this.setFilter} value="all">All</button></a>
		            </li>
		            <li>
		            	<a className={activeClass}><button onClick={this.setFilter} value="active">Active</button></a>
		            </li>
		            <li>
		            	<a className={completeClass}><button onClick={this.setFilter} value="complete">Completed</button></a>
		            </li>
	            </ul>
	            <button className="clear-completed" onClick={this.clear}>Clear completed</button>
            </footer>
		);
	}
}

export default Filters;