import React from 'react';
import * as d3 from "d3"; 
import GoogleMapReact from 'google-map-react';

function initMap() {
	var uluru = { lat: -25.363, lng: 131.044 };
	var uka = { lat: 49.976515, lng: 82.571675 };
	var map = {
		zoom: 2,
		center: { lat: 62.055155, lng: 1.474776 }
	}
	var marker1 ={
		position: uka,
		map: map,
		title: "I was born here!"
	}
	var bryansk = {
		position: { lat: 53.304458, lng: 34.312140 },
		map: map,
		title: "I lived here for 5 years, and studied computer science"
	}

	var portland = {
		position: { lat: 45.570655, lng: -122.799300 },
		map: map,
		title: "I lived here for 2 years"
	}
	var charlotte = {
		position: { lat: 35.221194, lng: -80.840227 },
		map: map,
		title: "Now, I live here, and I'm studying computer science again (Web-development)"
	}
}

const MapComponent = (props)=>{
	return <div>
	<h1>
	Hello map!
	</h1>
	<div id="map"></div>

	</div>
}
export default MapComponent;