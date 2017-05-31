import React from 'react';
import ReactDOM from 'react-dom';

const VotingBox = (props)=>{
	const increment = () => {
		props.changeFunc(props.name);
	}
	let rowStyle = {width:400,height:100,margin:"auto auto",backgroundColor:"white",border:"thin solid black"};
	let countStyle = {width:75,height:75,border:"thin solid black",borderRadius:100,display:"inline-block",verticalAlign:"top",textAlign:"center",fontSize:30,fontWeight:"bold",paddingTop:20,boxSizing:"border-box",marginTop:12,marginLeft:10};
	let titleStyle = {display:"inline-block",verticalAlign:"top",width:260,height:100,textAlign:"center",boxSizing:"border-box",paddingTop:15};
	let imgStyle = {width:50,height:50,display:"inline-block",verticalAlign:"top",background:"none",border:"none",marginTop:25};
	let imgSrc = "./plus.png";
	let imgAlt = "Increment Count";

	return 	<div style={rowStyle} key={props.name}>
				<div style={countStyle}>{props.count}</div>
				<div style={titleStyle}>
					<h2>{props.name}</h2>
				</div>
				<img src={imgSrc} alt={imgAlt} style={imgStyle} onClick={increment}/>
			</div>;
}

class ScoreBoard extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			boxes: props.boxes
		}
	}

	onChange = (name)=>{
		let newBoxes = Object.assign([],this.state.boxes);
		for(let i = 0; i < newBoxes.length; i++) {
			if(newBoxes[i].name === name) {
				newBoxes[i].count+=1;
			}
		}
		this.setState({
			boxes: newBoxes
		});
	}

	sortBoxes = ()=>{
		return this.state.boxes.sort((a,b)=>{
			return b.count-a.count;
		});
	}

	render = ()=>{
		let sorted = this.sortBoxes();
		console.log(sorted);
		return  <div>
					{sorted.map((el)=>{
						return <VotingBox count={el.count} name={el.name} key={el.name} changeFunc={this.onChange} />;
					 })
					}
				</div>
	}
}

const App = (props)=>{
	let appStyle = {width: 700, height: 500, margin: "auto auto", backgroundColor: "grey"};
	let headerStyle = {textAlign:"center",verticalAlign:"top"};

	return 	<div style={appStyle}><h1 style={headerStyle}>Vote Your JS Library!</h1>
				<ScoreBoard boxes={props.boxes} />
			</div>;
}

ReactDOM.render(<App boxes={[{count:1,name:"React"},{count:2,name:"Vue"},{count:5,name:"Angular"},{count:3,name:"Ember"}]}/>, document.getElementById('root'));