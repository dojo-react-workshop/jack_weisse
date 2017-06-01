import React from 'react';
import ReactDOM from 'react-dom';

const App = (props)=>{
	return  <div>
				<GameView />
			</div>;
}

class GameView extends React.Component {
	constructor(props){
		super(props);

		let bd = [[{imgSrc:"", display:"none", row:0, col:0},{imgSrc:"", display:"none", row:0, col:1},{imgSrc:"", display:"none", row:0, col:2}],
				  [{imgSrc:"", display:"none", row:1, col:0},{imgSrc:"", display:"none", row:1, col:1},{imgSrc:"", display:"none", row:1, col:2}],
				  [{imgSrc:"", display:"none", row:2, col:0},{imgSrc:"", display:"none", row:2, col:1},{imgSrc:"", display:"none", row:2, col:2}]];

		this.state = {
			board: bd,
			player: 0
		};
	}

	checkWin = ()=>{
		console.log("check...");
	}

	onChange = (row,col)=>{
		let bd = Object.assign(this.state.board);
		let p = this.state.player;
		let img = "";
		if(p===0) {
			img = "./autobot.png";
			p = 1;
		} else {
			img = "./decepticon.png";
			p = 0;
		}
		bd[row][col].imgSrc = img;
		bd[row][col].display = "initial";

		this.setState({
			board:bd,
			player:p
		});
	}

	reset = ()=>{
		let bd = Object.assign(this.state.board);
		for(let i = 0; i < bd.length; i++) {
			for(let j = 0; j < bd[i].length; j++) {
				bd[i][j].imgSrc = "";
				bd[i][j].display = "none";
			}
		}

		this.setState({
			board: bd,
			player: 0
		});
	}


	render = ()=>{
		let boardStyle = {width:800,height:400,margin:"auto auto",border:"thin solid black",boxSizing:"border-box",paddingTop:30};
		let resetStyle = {display:"block",width:100,height:30,margin:"auto auto",marginTop:20,fontSize:20,fontWeight:"bold"};

		return 	<div style={boardStyle}>
					{this.state.board.map((el,idx)=>{
						let setKey = idx+"-"+Math.floor(Math.random()*1000000);
						return <Row boxes={this.state.board[idx]} key={setKey} changeFunc={this.onChange} />
					})}
					<button style={resetStyle} onClick={this.reset}>RESET</button>
				</div>;
	}
}

const Row = (props)=>{
	let rowStyle={display:"block",width:315,height:100,margin:"auto auto",fontSize:0};
	const passChange = (row,col)=>{
		props.changeFunc(row,col);
	}
	return  <div style={rowStyle}>
				{props.boxes.map((el)=>{
					let setKey = `${el.row}-${el.col}`;
					return <Box imgSrc={el.imgSrc} row={el.row} col={el.col} display={el.display} key={setKey} changeFunc={passChange} />
				})}
			</div>
}

const Box = (props)=>{
	let boxStyle={width:100,height:100,border:"thin solid black",display:"inline-block",marginBottom:0,marginTop:0,textAlign:"center", verticalAlign:"top"};
	let imgStyle={width:90,height:90, display:props.display};

	const addSymbol = ()=>{
		if(props.imgSrc === "") {
			props.changeFunc(props.row,props.col);
		} 
		// else don't change an image that's already showing
	}

	return  <div style={boxStyle} onClick={addSymbol}><img src={props.imgSrc} style={imgStyle} alt={props.imgSrc} /></div>
}

ReactDOM.render(<App />, document.getElementById('root'));