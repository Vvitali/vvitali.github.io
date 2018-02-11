import React from "react"
import MapComponent from "../../Components/Map";

const AboutMe = ()=>{
	const componentStyle={
		backgroundColor:  "black",
		width: '250px', 
		height: '400px'
	};
	return(
		<MapComponent style={componentStyle}/>
		);
}

export default AboutMe;