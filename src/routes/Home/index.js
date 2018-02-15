import React, { Component } from 'react';
class Home extends Component{
render(){
const isMobile = window.innerWidth <= 500;
let style= isMobile? { padding: "0px 15px 0px 15px"} : {padding: "0px"};
return(
<div className="BioStyle row text-left">
	<h1 className="bottom" style={style}>Hello!</h1>
	<hr/>
	<div className="col-sm-12 col-md-6" style={style}><p>My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer. <br/>Now, you can see my home-page where you can find my contacts, 
	some of my projects, and just some interesting things</p></div>
	<div className="col-sm-12 col-md-6 text-center"><img src="/images/ava.jpg" alt="Vitaliy's face" style={{}}/></div>
</div> 
)
};
}

export default Home;