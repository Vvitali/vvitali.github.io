import React, { Component } from 'react';
import MapItem from "../../Components/Map/index.js";
class Home extends Component{
	render(){
		return(
			<div className="BioStyle">
			<h1>Hello!</h1>
			<img src="/images/ava.jpg"/>
			<p>My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer. Now, you can see my home-page where you can find my contacts, 
			some of my projects, and just some interesting things</p>
			</div> 
			)
	};
}

export default Home;