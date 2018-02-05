import React, { Component } from 'react';

const Contact =()=>{

	return(
		<div className="links">
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
		) 
}

export default Contact;