import React from 'react';

export class StProfile extends React.Component{	
	  render() {
	  	console.log(this.props.nicknames);
	  	var profile = <div>
	  	<h1>Login please!</h1>
	  	<p><input type="text"  autofocus/></p>
		<p><input type="password" /></p>
		<p><input type="checkbox" unchecked/>checkbox</p>
		<p><input type="radio" value="A" name="choice"/>
		<input type="radio" value="B" name="choice" />
		<input type="radio" value="C" name="choice"/> (radio)</p>
		<p><input type="file" checked/> (file)</p>
		</div>

    return (
    	<div className="profile">
    	{profile}
    	</div>
      );
  }
}