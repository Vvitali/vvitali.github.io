import React from 'react';
import * as d3 from "d3"; 
import GoogleMapReact from 'google-map-react';

const places = [
{
	name: "Marker1",
	position: { lat: 49.976515, lng: 82.571675 },
	title: "I was born here!"
}
,{
	name: "bryansk",
	position: { lat: 53.304458, lng: 34.312140 },
	title: "I lived here for 5 years, and studied computer science"
}
,{
	name: "portland",
	position: { lat: 45.570655, lng: -122.799300 },
	title: "I lived here for 2 years"
}
,{
	name: "charlotte",
	position: { lat: 35.221194, lng: -80.840227 },
	title: "Now, I live here, and I'm studying computer science again (Web-development)"
}
];

const componentStyle={
	backgroundColor:  "black",
	width: '100%', 
	height: '450px'
};

const AnyReactComponent = ({ text }) =>(
	<div style={{
		position: 'relative', color: 'white', background: 'red',
		height: 40, width: 60, top: -20, left: -30,    
	}}>{text}</div>
	); 

class MapComponent extends React.Component{
	static defaultProps = {
		zoom: 2,
		center: { 
			lat: 62.055155, 
			lng: 1.474776 
		}
	}

	render(){
		let renderedPlaces = [];
		for(let place of places){
			console.log(place.title)
			renderedPlaces.push(<AnyReactComponent lat={ place.position.lat } lng={place.position.lng } text={ place.title }/>); 
		};
		console.log("start");
		return (
			<GoogleMapReact style={componentStyle} defaultCenter={ this.props.center } defaultZoom={ this.props.zoom }>
			<AnyReactComponent lat={ 40.7473310 } lng={ -73.8517440 } text={ 'Wheres Waldo?' }/>
			{
				()=>{

				}
			}
			</GoogleMapReact>
			);
	}

}
export default MapComponent;