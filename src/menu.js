import React from 'react';

export class Menu extends React.Component{	
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e){
		var fine = e.target.getAttribute('id');
		this.props.onClick(fine);
	}


  render() {  	
	return (
	<div className="Menu"  >	
	<div id="firsts">
	<ul>
	<li><a href = "" onClick={this.clickHandler}>Home</a></li>
	<li><a id="Instagram" href = "#" onClick={this.clickHandler}>Instagram</a></li>
	<li><a id="Con" href = "#" onClick={this.clickHandler}>Contact</a></li>
	</ul>
	</div>
	</div>
	)	
  };  
  }