import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';

class TodoItem extends Component {

	removeItem = (idx)=>{
		this.props.remove(this.props.idx);
	}

	toggleComplete = (idx)=>{
		this.props.toggle(this.props.idx);
	}

	render() {
		let liClass = (this.props.complete ? "completed" : "view");
		return (
			<div>
				<li className={liClass}>
					<input className="toggle" type="checkbox" onClick={this.toggleComplete} />
					<label>{this.props.text}</label>
					<button className="destroy" onClick={this.removeItem}></button>
				</li>
			</div>
		);
	}
}

export default TodoItem;