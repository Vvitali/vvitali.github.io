import React from "react"
import MapComponent from "../../Components/Map";

const AboutMe = ()=>{
	const isMobile = window.innerWidth <= 500;
	console.log(window.innerWidth)
	return(
		<div className="row">
		<h1 className="page-header bottom">About me</h1>
		<p>My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer.</p>
		<h3>My journey! <span style={{fontSize: "14px"}}>(hint: {isMobile? "hold your finger couple seconds over any marker":"hover the cursor over any marker"})</span></h3>
		<MapComponent/>
		</div>
		);
}

export default AboutMe; 