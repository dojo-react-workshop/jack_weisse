import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';
import TodoItem from "./addItem.js";

class TodoList extends Component {
	render() {
		return (
			<div>
				<div>Button with Down Arrow & Text Input</div>
				<div>List Items with Checkbox and item</div>
				<div>Number of Items with filter buttons</div>
			</div>
		);
	}
}

export default TodoList;