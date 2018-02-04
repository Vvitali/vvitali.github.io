import React, { Component } from 'react';

export class NavBar extends Component{
	constructor(props){
		super(props);
	};

	render(){
		return(
			<nav>
			<div className="nav-wrapper">
			<a href="#" className="brand-logo center">Vitaliy Vorobyev</a>
			<ul id="nav-mobile" className="left hide-on-med-and-down">
			<li><a href="sass.html">Home</a></li>
			<li><a href="badges.html">Components</a></li>
			<li><a href="collapsible.html">Contact me</a></li>
			</ul>
			</div>
			</nav>
			)
	};

}