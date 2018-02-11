import React from 'react';
import * as d3 from "d3"; 
import GoogleMapReact from 'google-map-react';
import MapObject from "./object.js"
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
	width: '100%', 
	height: '450px'
};


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
			renderedPlaces.push(<MapObject lat={ place.position.lat } lng={place.position.lng } text={ place.title }/>); 
		};
		console.log("start");
		return (
			<GoogleMapReact style={componentStyle} defaultCenter={ this.props.center } defaultZoom={ this.props.zoom }>
			
			{
				renderedPlaces
			}
			</GoogleMapReact>
			);
	}

}
export default MapComponent;