import React, { Component } from 'react';
import "./style.css"
class Home extends Component{
	render(){
		const isMobile = window.innerWidth <= 500;
		let style= isMobile? { padding: "0px 15px 0px 15px"} : {padding: "0px"};
		return(
			<div className="BioStyle row text-left">
			<h1 className="bottom" style={style}>Hello!</h1>
			<hr/>
			<div className="col-sm-12 col-md-6 animated" style={style}><p >My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer. <br/>Now, you can see my home-page where you can find my contacts, 
			some of my projects, and just some interesting things</p>
			<h2>Stack:</h2>
			<ul>
			<li>JS ES6</li>
			<li>Node.js</li>
			<li>React.js</li>
			<li>MySQL, MongoDB</li>			
			<li>AWS, S3, EC2</li>
			</ul>
			</div>
			<div className="col-sm-12 col-md-6 text-center animated"><img className="shadow" src="./images/ava.jpg" alt="Vitaliy's face"/></div>

			</div> 
			)
	};
}

export default Home;