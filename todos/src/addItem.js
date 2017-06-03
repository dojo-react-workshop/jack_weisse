import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';

class TodoItem extends Component {

	constructor(props){
		super(props);

		this.state = {
			editing:false,
			text:this.props.text
		}
	}

	removeItem = (idx)=>{
		this.props.remove(this.props.idx);
	}

	toggleComplete = (idx)=>{
		this.props.toggle(this.props.idx);
	}

	edit = (e)=>{
		this.setState({
			editing: true
		})
	}

	update = (e)=>{
		this.setState({
			text: e.target.value
		});
	}

	submitText = (e)=>{
		if(e.target.value === "") {
			return;
		}
		if(e.keyCode === 13) {
			this.props.update(e.target.value,this.props.idx);
		}
	}

	render() {
		let liClass = (this.props.complete ? "completed" : "view");

		if(this.state.editing) {
			return (
				<div>
					<li className="editing">
						<input className="toggle" type="checkbox" onClick={this.toggleComplete} defaultChecked={this.props.complete}/>
						<input className="new-todo" type="text" autoFocus value={this.state.text} onChange={this.update} onKeyDown={this.submitText} />
						<button className="destroy" onClick={this.removeItem}></button>
					</li>
				</div>
			);
		} else {
			return (
				<div>
					<li className={liClass}>
						<input className="toggle" type="checkbox" onClick={this.toggleComplete} defaultChecked={this.props.complete}/>
						<label onDoubleClick={this.edit} value={this.props.idx}>{this.props.text}</label>
						<button className="destroy" onClick={this.removeItem}></button>
					</li>
				</div>
			);
		}
	}
}

export default TodoItem;