import React from 'react';
import * as d3 from "d3"; 
import GoogleMapReact from 'google-map-react';
import MapObject from "./object.js"
const places = [
{
	name: "Ust-Kamenogorsk, KZ",
	position: { lat: 49.976515, lng: 82.571675 },
	title: "I was born here!",
	pic: "https://www.justgorussia.co.uk/userfiles/images/russia/russian_regions/altay.jpg"
}
,{
	name: "Bryansk, RU",
	position: { lat: 53.304458, lng: 34.312140 },
	title: "I lived here for 5 years, and studied computer science",
	pic: "https://imgp.golos.io/0x0/http://i.imgsafe.org/fc06379e78.jpg"
}
,{
	name: "Portland, OR",
	position: { lat: 45.570655, lng: -122.799300 },
	title: "I lived here for 2 years",
	pic: "http://greatruns.com/wp-content/uploads/2016/11/Mt-Hood-and-Portland-waterfront-Agape-Voyage-700x447.jpeg"
}
,{
	name: "Charlotte, NC",
	position: { lat: 35.221194, lng: -80.840227 },
	title: "Now, I live here, and I'm studying computer science again (Web-development)",
	pic:" http://www.charlottesgotalot.com/sites/default/master/files/styles/sliderkit_main_slide/public/Skyline_Night_970x550.jpg?itok=jmydaRdZ"
}
];

const componentStyle={ 
	width: '100%', 
	height: '450px'
};

class MapComponent extends React.Component{
	static defaultProps = {
		zoom: 0.5,
		center: { 
			lat: 40, 
			lng: -45 
		}
	}

	render(){
		let renderedPlaces = [];
		for(let place of places){
			renderedPlaces.push(<MapObject key={place.name} name={place.name} lat={ place.position.lat } lng={place.position.lng } pic={ place.pic} text={ place.title }/>); 
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