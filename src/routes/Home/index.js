import React, { Component } from 'react';
class Home extends Component{
	render(){
		return(
			<div className="BioStyle row text-left">
			<h1 className="bottom">Hello!</h1>
			<hr/>	
			<img src="/images/ava.jpg" alt="Vitaliy's face" style={{float: "left", paddingRight: "15px"}}/>
			<p>My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer. <br/>Now, you can see my home-page where you can find my contacts, 
			some of my projects, and just some interesting things</p>
			</div> 
			)
	};
}

export default Home;