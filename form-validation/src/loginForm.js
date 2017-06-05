import React, { Component } from 'react';
import ValidatedText from "./validatedText.js";
import isEmail from 'validator/lib/isEmail';

class LoginForm extends Component {
	state = {
		submitted: false,
		nameValid: false,
		emailValid: false
	}
	submitForm = ()=>{
		this.setState({
			submitted:true
		});
	}
	validateName = (val)=>{
		if(val.length >= 8) {
			this.setState({
				nameValid:true
			});
			return true;
		} else {
			this.setState({
				nameValid:false
			});
			return false;
		}
	}
	validateEmail = (val)=>{
		console.log(val);
		if(isEmail(val)) {
			this.setState({
				emailValid:true
			});
			return true;
		} else {
			this.setState({
				emailValid:false
			});
			return false;
		}
	}
	render() {
		let submitButton = (<input type="submit" value="Submit" disabled />);
		if(this.state.nameValid && this.state.emailValid) {
			submitButton = (<input type="submit" value="Submit" />);
		}
		let form = (
	      <form onSubmit={this.submitForm}>
	      	<ValidatedText validate={this.validateName} errorText="Name needs 8 characters" valid={this.state.nameValid} />
	      	<ValidatedText validate={this.validateEmail} errorText="Email should follow standard format: email@valid.com" valid={this.state.emailValid} />
	      	{submitButton}
	      </form>
	    );
	    if(this.state.submitted) {
	    	form = (<h2>Thanks!</h2>);
	    }
	    return form;
  	}
}

export default LoginForm;