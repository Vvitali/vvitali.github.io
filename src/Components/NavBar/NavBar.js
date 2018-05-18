import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export class NavBar extends Component{
	render(){
		return(			
			<nav className="navbar navbar-default">
			<div className="container-fluid"> 
			<div className="navbar-header">
			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span className="sr-only">Toggle navigation</span>
			<span className="icon-bar"></span>
			<span name="icon-bar"></span>
			<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand center" href="/">Vorobyev Vitaliy</a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav">
			</ul>
			<form className="navbar-form navbar-left">

			</form>
			<ul className="nav navbar-nav navbar-left">
			<li><Link to="./">Home</Link></li>
			<li><Link to="./aboutme">About me</Link></li>
			<li><Link to="./portfolio">Portfolio</Link></li>
			<li><Link to="./contact">Contact</Link></li>

			</ul>
			</div> 
			</div>
			</nav>
			)
	};

}