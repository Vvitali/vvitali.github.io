import React, { Component } from 'react';
import './App.css';
import './profile.css';
import { Menu } from './menu';
import {Photo} from "./photo";
import {Footer} from "./footer";

class App extends Component {
	constructor(props){
	super(props);
	this.state = {oldtext: "Hello world!", body: <div className="BioStyle">
  		<img src="/images/ava.jpg"/>
  		<h1>Hello!</h1>
  		<p >My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer. Now, you can see my home-page where you can find my contacts, 
  		some of my projects, and just some interesting things</p>
  		</div> };
	this.changeBody = this.changeBody.bind(this);

	}

	instaComponent () {
        const script = document.createElement("script");
        script.src = "instafeed.min.js";
        script.async = true;
        document.body.appendChild(script);
    }

	changeBody(newBody){
		var Instagram = <div className="PhotoArray"><Photo></Photo></div>
  		var Biography = 
  		<div className="BioStyle">
  		<img src="/images/ava.jpg"/>
  		<h1>Hello!</h1>
  		<p >My name is Vitaliy Vorobyev, and I'm Full-stack web-developer. Now, you can see my home-page where you can find my contacts, 
  		some of my projects, and just some interesting things</p>
  		</div>

		var Con = <div className="links">
		<div className="links" id="github">
		<img src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{height: 100}}/>
		<a href="https://github.com/Vvitali"><p>GitHub</p></a>
		</div>

		<div className="links" id="facebook">
		<img src="http://www.freeiconspng.com/uploads/facebook-black-radius-transparent-26.png" style={{height: 100}}/>
		<a href="https://www.facebook.com/profile.php?id=100001539428317"><p>Facebook</p></a>
		</div>

		<div className="links" id="linkin">
		<img src="https://image.flaticon.com/icons/svg/34/34227.svg" style={{height: 100}}/>
		<a href="https://www.linkedin.com/in/vitaliy-vorobyev-b5971210a"><p>LinkedIn</p></a>
		</div>

		<div id="resume">
		<img src="http://izabelmar.com/wp-content/uploads/resume-logo.jpg" style={{ width:100}}/>
		<a href="./Vitaliy Vorobyev SD resume.rtf"><p>Resume.rtf</p></a>
		</div>
		
		</div>

		switch(newBody){
			case "Biography":
			this.setState({body: Biography });
			break;
			case "Instagram":
			this.setState({body: Instagram });
			break;
			case "Con":
			this.setState({body: Con });
			break;
			default: 
			break;
		}

	}

  render() {
    return (
	  <div className="App" >
        <div className="Header"></div>
		<div className="Menu"><Menu onClick={this.changeBody}></Menu></div>
		<div>
		{this.state.body}
		</div>	
		<div className="footer"><Footer link="909a1c" vlink="#cecece"  ></Footer>	</div>
		
		</div>	 
    );
  }
}

export default App;