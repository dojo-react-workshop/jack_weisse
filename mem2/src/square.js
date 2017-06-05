import React, { Component } from 'react';

class Square extends Component {

	toggle = ()=>{
		if(this.props.gameState==="guess") {
			if(!this.props.selected) {
				this.props.add(this.props.idx);
			} else if(this.props.selected) {
				this.props.remove(this.props.idx);
			}
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

  	if(this.props.selected && this.props.gameState==="guess") {
  		style.backgroundColor = "orange";
  	}

  	return (
  		<div style={style} onClick={this.toggle}></div>
  	);
  }
}

export default Square;