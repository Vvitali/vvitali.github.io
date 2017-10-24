import React from 'react';

export class Lognform extends React.Component{
	render(){
		
		var login2form = <div>
		<label>Name</label>
        <input type="text"  />
        <label>Password</label>
        <input type="password"  />
        <label>Email</label>
        <input type="email"  />
        <button onClick={this.saveAndContinue}>Save and Continue</button>		
		</div>		
		return (
		<div>
		{login2form}
		</div>
		);
	}
}
