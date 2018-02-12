import React from "react"
import MapComponent from "../../Components/Map";
import "./style.css";

const AboutMe = ()=>{
	const isMobile = window.innerWidth <= 500;
	return(
		<div className="row text-left" >
		<div style={ isMobile? { paddingLeft: "15px"} : {padding: "0px"}}>
		<h1 className="bottom">About me</h1>
		<hr/>
		<p>My name is Vitaliy Vorobyev (I think, you already knew it <img className="emoji"src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/grinning-cat-face-with-smiling-eyes.png" alt=""/> ), and I'm very interested in computers, and computer science.
		<br/>
		I was born in  <a href="https://en.wikipedia.org/wiki/Kazakhstan" alt="Republic of Kazakhstan" target="_blank">Republic of Kazakhstan</a>, lived for a while in Russian Federation, and now I live in The United States.
		<br/>
		When i was 8 years old, my mother has bought me my first computer, and I've started to learn digital world!</p>
		<h3 className="">My journey! <span style={{fontSize: "14px"}}>(hint: {isMobile? "hold your finger couple seconds over any marker":"hover the cursor over any marker"})</span></h3>
		</div>
		<MapComponent
		bootstrapURLKeys={{
			key: "AIzaSyDyePBmEMRe0sGjQBRvDq8TYEcXkDfp_0I"
		}}/>

		<span><em>1999: In my childhood I had a lot of toys, and electric devices (like cassette player), one day I've found a screwdriver <img className="emoji" src="https://cdn.emojidex.com/emoji/seal/%28flat_head%29screw_driver.png" alt=""/>, and after couple hours my parents found me on the floor surrounded by numbers of details</em></span>
		<br/>
		<br/>
		<em>"to be continued"</em>

		</div>
		);
}

export default AboutMe; 