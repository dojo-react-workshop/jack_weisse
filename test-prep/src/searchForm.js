import React from "react";

class SearchForm extends React.Component {
	state = {
		value:""
	}

	textUpdate = (e)=>{
		this.setState({
			value:e.target.value
		});
	}

	submitSearch = (e)=>{
		e.preventDefault();
		this.setState({
			value:""
		})
		this.props.getData(e.target.children[0].value);
	}

	render() {
		return (
			<form style={{textAlign:"center"}} onSubmit={this.submitSearch}>
	            <input type="text" value={this.state.value} onChange={this.textUpdate} />
	            <input type="submit" value="Search" />
        	</form>
        );
	}
}

export default SearchForm;