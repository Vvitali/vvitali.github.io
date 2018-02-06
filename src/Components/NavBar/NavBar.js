import React, { Component } from 'react';
export class NavBar extends Component{
	constructor(props){
		super(props);
	};

	render(){
		return(
			<div>
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
			<ul className="side-nav" id="mobile-demo">
			<li><a href="sass.html">Sass</a></li>
			<li><a href="badges.html">Components</a></li>
			<li><a href="collapsible.html">Javascript</a></li>
			<li><a href="mobile.html">Mobile</a></li>
			</ul>
			</div>
			)
	};

}