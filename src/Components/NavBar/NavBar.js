import React, { Component } from 'react';
export class NavBar extends Component{
	constructor(props){
		super(props);
	};

	render(){
		return( 
			<nav>
			<div className="nav-wrapper red">
			<a href="#" className="brand-logo center">Vitaliy Vorobyev</a>
			<ul id="nav-mobile" className="left hide-on-med-and-down">
			<li><a href="/">Home</a></li>
			<li><a href="/portfolio">Portfolio</a></li>
			<li><a href="/contact">Contact me</a></li>
			</ul>
			</div>
			</nav> 
			)
	};

}