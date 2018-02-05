import React, { Component } from 'react';

const Contact =()=>{

	return(
		<div className="links">
		<div className="links" id="github">
		<a href="https://github.com/Vvitali" target="_blank">
		<img src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{height: 100}}/>
		<p>GitHub</p>
		</a>
		</div>

		<div className="links" id="facebook">
		<a href="https://www.facebook.com/profile.php?id=100001539428317" target="_blank">
		<img src="http://www.freeiconspng.com/uploads/facebook-black-radius-transparent-26.png" style={{height: 100}}/>
		<p>Facebook</p>
		</a>
		</div>

		<div className="links" id="linkin">
		<a href="https://www.linkedin.com/in/vitaliy-vorobyev-b5971210a" target="_blank">
		<img src="https://image.flaticon.com/icons/svg/34/34227.svg" style={{height: 100}}/>
		<p>LinkedIn</p>
		</a>
		</div>

		<div id="resume">
		<img src="http://izabelmar.com/wp-content/uploads/resume-logo.jpg" style={{ width:100}}/>
		</div>
		<a href="https://docs.google.com/document/d/1SHh8_B4WcXeDzxFUKNbYgjo2rnQRN6oo4S6AtJd_vdk/edit?usp=sharing" target="_blank">
		<img src="/images/gdrive.png" style={{ width:100}}/>
		<p>Watch it on Google Docs resume</p>
		</a>
		<a href="https://docs.google.com/document/d/1SHh8_B4WcXeDzxFUKNbYgjo2rnQRN6oo4S6AtJd_vdk/export?format=pdf" target="_blank">	
		<p>Vitaliy Vorobyev Resume.pdf - Download<i className="material-icons">file_download</i></p>
		</a>

		</div>
		) 
}

export default Contact;