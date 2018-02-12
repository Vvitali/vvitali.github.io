import React from "react"
import MapComponent from "../../Components/Map";
import "./style.css";

const AboutMe = ()=>{
	const isMobile = window.innerWidth <= 500;
	return(
		<div className="row text-left" >
		<div style={ isMobile? { padding: "0px 15px 0px 15px"} : {padding: "0px"}}>
		<h1 className="bottom">About me</h1>
		<hr/>
		<p>My name is Vitaliy Vorobyev (I think, you already knew it <img className="emoji"src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/grinning-cat-face-with-smiling-eyes.png" alt=""/> ), and I'm very interested in computers, and computer science.
		I was born in  <a href="https://en.wikipedia.org/wiki/Kazakhstan" alt="Republic of Kazakhstan" target="_blank">Republic of Kazakhstan</a>, lived for a while in Russian Federation, and now I live in The United States.</p>
		<h3>Origin</h3>
		<p>
		When i was 8 years old, my mother has bought me my first computer, and I've started to learn digital world, I was attending computer science class at my first school, and there I learned foundations of CS (like information, types of information, variables, numeral systems, algorithms, and etc), wrote my first computer programm (I used program language called <a href="https://en.wikipedia.org/wiki/BASIC" target="_blank">BASIC</a>). Also, (Thank you StarCraft and your direct dial-up network feature) I learned basics of computer hardware, and networking.</p>
		<h3>Middle school</h3>
		<p>Unfortunatly, when I went to middle school, my family moved to another place, and at new school I had very low level CS-class, so I had to educate myself, it was hard and inconvenient, because this period of time in my home town (<a href="https://en.wikipedia.org/wiki/Oskemen" target="_blank">Ust'-Kamenogorks</a>) Internet connection was a rear thing, and I had only 3 options: books, magazines, and prepaid internet cards for low-speed dial-up connection (rare, and not popular option for me). So, mostly, I liked to read magazines, because they also included CD or DVD disks with software, and OS's (linux or FreeBSD - this is how I've got into linux-world) on it.
		In 2009 <a href="https://en.wikipedia.org/wiki/Asymmetric_digital_subscriber_line" target="_blank">ADSL</a>-internet-provider has came to my city, and I've got my first unlimited internet connection - and it speeded up my progress a lot! I've learned basics of HTML, CSS, and PHP, I was playing with open-source web and database servers, but in 2011 my family had to move far away. 
		</p>
		<h3>High school and University</h3>

		<h3 className="">My journey! <span style={{fontSize: "14px"}}>(hint: {isMobile? "hold your finger couple seconds over any marker":"hover the cursor over any marker"})</span></h3>
		</div>
		<MapComponent/>

		<span><em>1999: In my childhood I had a lot of toys, and electric devices (like cassette player), one day I've found a screwdriver <img className="emoji" src="https://cdn.emojidex.com/emoji/seal/%28flat_head%29screw_driver.png" alt=""/>, and after couple hours my parents found me on the floor surrounded by numbers of details</em></span>
		<br/>
		<br/>
		<em>"to be continued"</em>

		</div>
		);
}

export default AboutMe; 