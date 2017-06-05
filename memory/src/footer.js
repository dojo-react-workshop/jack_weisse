import React, { Component } from 'react';

class Footer extends Component {

	state = {
		count:3
	}

	startGame = ()=>{
		this.props.startGame();

	    let interval = setInterval(countdown,1000);
	    let me = this;
	    function countdown(){
	      if(me.state.count===1) {
	        clearInterval(interval);
	        me.props.memorize();
	      } else {
	        me.setState({
	          count:me.state.count-1
	        });
	      }
	    }
	}

	render() {
		let countStyle = {fontWeight:"bold",fontSize:30};
		if(this.props.gameState==="start") {
			return (<button onClick={this.startGame}>Start Game</button>);
		} else if(this.props.gameState==="prep") {
			return (<p>Get Ready to Memorize in <span style={countStyle}>{this.state.count}</span></p>);
		} else if(this.props.gameState==="memorize") {
			return (<div></div>);
		} else {
			return (<div>TODO</div>);
		}
	}
}

export default Footer;