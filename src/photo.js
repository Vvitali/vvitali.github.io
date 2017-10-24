import React from 'react';


export class Photo extends React.Component{	
  render() {
	  var photoarray = [];
	for(var i =1; i<80; i++){
		photoarray.push(<img src={'images/' + i +'.jpg'}/>);
	};	

    return (    
    <div>    
	  {photoarray}
	  </div>
    );
  }
}