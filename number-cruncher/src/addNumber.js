import React, { Component } from 'react';
const LOWERLIMIT = 0;
const UPPERLIMIT = 100;

class AddNumber extends Component {

	state = {
		newNumber: LOWERLIMIT
	}

	handleTextInput = ({target:{value}})=>{
		const newValue = Number(value)
		if(!isNaN(newValue) && newValue >= LOWERLIMIT && newValue <= UPPERLIMIT) {
			this.setState({
				newNumber: newValue
			});
		}
	}

	handleSubmit = (event)=>{
		event.preventDefault();
		this.props.submitNumber(this.state.newNumber);
		this.setState({
			newNumber:""
		});
	}

  	render() {
	    return (
	      	<form onSubmit={this.handleSubmit}>
				<label>New Number (must be integer between 0 and 100):</label>
				<input type="text" name="newNumber" value={this.state.newNumber} onChange={this.handleTextInput} />
				<input className="button" type="submit" value="Add" />
			</form>
	    );
  	}
}

export default AddNumber;