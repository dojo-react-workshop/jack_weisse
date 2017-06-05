import React, { Component } from 'react';

class ValidatedText extends Component {
	state = {
		value:"",
		error:this.props.errorText,
		valid:this.props.valid
	}
	handleChange = (e)=>{
		this.setState({
			value:e.target.value,
			valid:this.props.validate(e.target.value)
		});
	}
	render() {
	  	let divStyle = {display:"inline-block",color:"red",margin:10};
	  	if(this.state.valid) {
	  		divStyle = {display:"none"};
	  	}
	    return (
	    	<div>
	    		<input type="text" value={this.state.value} onChange={this.handleChange} />
	    		<div style={divStyle}>{this.state.error}</div>
	    	</div>
	    );
	}
}

export default ValidatedText;