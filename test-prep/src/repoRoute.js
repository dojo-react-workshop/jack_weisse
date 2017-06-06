import React from "react";
import axios from "axios";

class RepoRoute extends React.Component {

	state = {
		repos:[]
	}

	getData = (url)=>{
		axios.get(url).then((response)=>{
			console.log(response);
		}).catch(console.log);
	}

	render() {
		this.getData(this.props.url);
		return (
			<h3>{this.props.match.params.user}</h3>
		);
	}
}

export default RepoRoute;