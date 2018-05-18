import React, { Component } from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

//routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

class App extends Component {

	Home = Loadable({
		loader: () => import('./routes/Home'),
		loading: Loading
	});
	Contact = Loadable({
		loader: () => import('./routes/Contact'),
		loading: Loading
	});
	Portfolio = Loadable({
		loader: () => import('./routes/Portfolio'),
		loading: Loading
	});
	AboutMe = Loadable({
		loader: () => import('./routes/AboutMe'),
		loading: Loading
	});

	render() {
		return (
			<div className="App">
			<NavBar></NavBar>
			<main>
			<div className="container">
			<div className="row"></div>
			<div className="row">
			<div className="col-md-1"></div>
			<div className="col-sm-12 col-md-10">
			<Router basename='vvitali.tk'>
			<Switch>
			<Route exact path="/" component={this.Home}/>
			<Route path="/contact" component={this.Contact}/>
			<Route path="/portfolio" component={this.Portfolio}/>
			<Route path="/aboutme" component={this.AboutMe}/>

			</Switch>
			</Router>
			</div>
			<div className="col-md-1"></div>
			</div>
			</div>

			</main>
			</div>	 
			);
	}
}

export default App;