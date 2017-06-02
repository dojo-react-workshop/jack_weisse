import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';

class Filters extends Component {

	setFilter = (e)=>{
		this.props.setFilter(e.target.value);
	}

	render() {
		let filterClass = "hidden";
		let text = "";
		if(this.props.numTodos > 0) {
			filterClass = "footer";
			if(this.props.numTodos === 1) {
				text = " item left";
			} else {
				text = " items left";
			}
		}

		return (
			<footer className={filterClass}>
	            <span className="todo-count"><strong>{this.props.numActive}</strong>{text}</span>
	            <ul className="filters">
		            <li>
		            	<a className="selected"><button onClick={this.setFilter} value="all">All</button></a>
		            </li>
		            <li>
		            	<a><button onClick={this.setFilter} value="active">Active</button></a>
		            </li>
		            <li>
		            	<a><button onClick={this.setFilter} value="complete">Completed</button></a>
		            </li>
	            </ul>
	            <button className="clear-completed">Clear completed</button>
            </footer>
		);
	}
}

export default Filters;