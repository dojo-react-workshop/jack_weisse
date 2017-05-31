import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.count,
			key: props.name
		}
	}	

	increment = ()=>{
		let temp = this.state.count+1;
		this.setState({
			count:temp
		});
	}

	decrement = ()=>{
		let temp = this.state.count-1;
		this.setState({
			count: temp
		});
	}

	render = ()=>{
		let boxStyle = {width:200,height:130,border:"thin solid black",margin:"auto auto",textAlign:"center",display:"block"};
		let bufferStyle = {width:10,display:"inline-block"};
		return 	<div style={boxStyle}>
					<h1>{this.state.count}</h1>
					<button onClick={this.increment}>Increment</button>
					<div style={bufferStyle}></div>
					<button onClick={this.decrement}>Decrement</button>
				</div>;
	}
}

class App extends React.Component {
	state = {
		numCounter: 1
	}

	addCounter = ()=>{
		let temp = this.state.numCounter+1;
		this.setState({
			numCounter: temp
		});
	}

	render() {
		let counters = [];
		for(let i = 1; i <= this.state.numCounter; i++) {
			counters.push(<Counter count={0} key={i} />);
		}

		return  <div>
					<button onClick={this.addCounter}>Add Counter</button>
					{counters}
				</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));