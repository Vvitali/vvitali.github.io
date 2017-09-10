import React from 'react';

export class Timer extends React.Component{		
	constructor(props)
	{
		super(props);
		this.state = {welcome: "Hello World!"};
		this.changeState =  this.changeState.bind(this);
	}

	changeState(){
		this.props.onChange("olololo");
	}

  render() {
  return(
  	<div>
  		<button onClick={this.changeState}>Click</button>
  	</div>
  	);
}
}