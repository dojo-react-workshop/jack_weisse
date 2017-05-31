import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
	// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 		name: "Hank"
	// 	}
	// }

	state = {
		name: "Hank",
		flag: true
	}

	changeName = ()=>{
		if(this.state.flag) {
			this.setState({
				name:"Jack",
				flag: false
			});
		} else {
			this.setState({
				name:"Hank",
				flag: true
			});
		}
	}

    render(){
        return (
            <div>
            	<h1>{this.state.name}</h1>
            	<button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));