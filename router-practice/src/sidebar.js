import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

const routes = [
	{
		path:"/",
		exact:true,
		main:()=>{return (<h3>Home</h3>);},
		side:()=>{return (<h3>home!</h3>);}
	},
	{
		path:"/bubblegum",
		exact:false,
		main:()=>{return (<h3>Bubblegum</h3>);},
		side:()=>{return (<h3>bubblegum!</h3>);}
	},
	{
		path:"/shoelaces",
		exact:false,
		main:()=>{return (<h3>Shoelaces</h3>);},
		side:()=>{return (<h3>shoelaces!</h3>);}
	}
];

const Sidebar = (props)=>{
	let sideStyle = {width:200,height:300,backgroundColor:"lightgrey",display:"inline-block"};
	let mainStyle = {display:"inline-block",verticalAlign:"top"};
	return (
		<Router>
			<div>
				<div style={sideStyle}>
					<Link to="/">Home</Link>
					<br />
					<Link to="/bubblegum">Bubblegum</Link>
					<br />
					<Link to="/shoelaces">Shoelaces</Link>
					<br />
					{routes.map((el,idx)=>{
						return (<Route key={el.path} path={el.path} exact={el.exact} render={el.side} />);
					})}
				</div>
				<div style={mainStyle}>
					{routes.map((el,idx)=>{
						return (<Route key={el.path} path={el.path} exact={el.exact} render={el.main} />);
					})}
				</div>
			</div>
		</Router>
	);
}

export default Sidebar;