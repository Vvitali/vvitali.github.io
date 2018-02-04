import React, { Component } from 'react';
import './App.css';
import {Photo} from "./photo";
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";

//routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

class App extends Component {
	constructor(props){
		super(props);
	}

	Home = Loadable({
		loader: () => import('./routes/Home'),
		loading: Loading
	});
	Contact = Loadable({
		loader: () => import('./routes/Contact'),
		loading: Loading
	});

	render() {
		return (
			<div className="App">
			<NavBar></NavBar>
			<main>
			<Router>
			<Switch>
			<Route exact path="/" component={this.Home}/>
			<Route path="/contact" component={this.Contact}/>
			</Switch>
			</Router>
			</main>
			<Footer link="909a1c" vlink="#cecece"></Footer>
			</div>	 
			);
	}
}

export default App;