import React, { Component } from 'react';
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
			<a className="navbar-brand center" href="/Personal-web-site">Vorobyev Vitaliy</a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul className="nav navbar-nav">
			</ul>
			<form className="navbar-form navbar-left">

			</form>
			<ul className="nav navbar-nav navbar-left">
			<li><a href="./">Home</a></li>
			<li><a href="./aboutme">About me</a></li>
			<li><a href="./portfolio">Portfolio</a></li>
			<li><a href="./contact">Contact</a></li>

			</ul>
			</div> 
			</div>
			</nav>
			)
	};

}