import React from "react";
var Instafeed = require("instafeed.js");

class InstaDiv extends React.Component{

	constructor(props){
		super(props);
	}

	getImages(){
	var token = '296144747.3040b05.1a9401faab534826bc6f1931b0f83bc8', // learn how to obtain it below
    userid = 296144747, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 20; // how much photos do you want to get
    $.ajax({
  	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
  	dataType: 'jsonp',
  	type: 'GET',
  	data: {access_token: token, count: num_photos},
  	success: function(data){
  		var array = [];

  		for( x in data.data ){
  			array.push('<img src="'+data.data[x].images.low_resolution.url+'""> '); 
      		// data.data[x].images.low_resolution.url - URL of image, 306х306
	    	// data.data[x].images.thumbnail.url - URL of image 150х150
	    	// data.data[x].images.standard_resolution.url - URL of image 612х612
	    	// data.data[x].link - Instagram post URL 
	    }
	},
	error: function(data){
		console.log(data); 	
    		// send the error notifications to console
    	}
    });
}

render(){
	return(
		<div>
		<h1>Hello insta!</h1>
		</div>
		)
}
}