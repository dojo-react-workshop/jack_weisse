import React from "react";
import {
	BrowserRouter as Router,
	Link,
	Route
} from "react-router-dom";

const Tacos = (props)=>{
	return (
		<div>
			<h2>Tacos</h2>
			<ul>
				<li><Link to="/tacos/bus">Bus</Link></li>
				<li><Link to="/tacos/cart">Cart</Link></li>
			</ul>
			{props.routes.map((route, i) => {
				return (
					<RouteWithSubRoutes key={i} {...route} />
			)})}
		</div>
	);
}

const Bus = (props)=>{return (<h2>Bus</h2>);}

const Cart = (props)=>{return (<h2>Cart</h2>);}

const Sandwiches = (props)=>{return (<h2>Sandwiches</h2>);}

const routes = [
  { path: '/sandwiches',
    component: Sandwiches
  },
  { path: '/tacos',
    component: Tacos,
    routes: [
      { path: '/tacos/bus',
        component: Bus
      },
      { path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={(props) => {
		return (<route.component {...props} routes={route.routes}/>);
	}} />
)

const RouteConfig = (props)=>{
	return (
		<Router>
			<div>
				<ul>
					<li><Link to="/tacos">Tacos</Link></li>
					<li><Link to="/sandwiches">Sandwiches</Link></li>
				</ul>

				{routes.map((route, i) => {
					return (
						<RouteWithSubRoutes key={i} {...route} />
				)})}
			</div>
		</Router>
	);
}

export default RouteConfig;