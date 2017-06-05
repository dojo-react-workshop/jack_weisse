import React, { Component } from 'react';

class Square extends Component {

	state = {
		selected:false
	}

	toggle = ()=>{
		if(this.props.gameState==="guess") {
			if(!this.state.selected) {
				this.props.add(this.props.idx);
			} else if(this.state.selected) {
				this.props.remove(this.props.idx);
			}
			this.setState({
				selected:!this.state.selected
			});
		}
	}

  render() {
  	let style = {width:100,height:100,display:"inline-block",border:"thin solid black",margin:5,backgroundColor:"lightgrey"};
  	if(this.props.status==="show"){
  		style.backgroundColor = "lightblue";
  	} else if(this.props.status==="correct") {
  		style.backgroundColor = "lightgreen";
  	} else if(this.props.status==="wrong") {
  		style.backgroundColor = "pink";
  	}

  	if(this.state.selected) {
  		style.backgroundColor = "orange";
  	}

  	return (
  		<div style={style} onClick={this.toggle}></div>
  	);
  }
}

export default Square;