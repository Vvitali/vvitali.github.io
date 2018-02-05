import React from 'react';
import { GoogleMap, Marker } from "react-google-maps";

function initMap() {
	var uluru = { lat: -25.363, lng: 131.044 };
	var uka = { lat: 49.976515, lng: 82.571675 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: { lat: 62.055155, lng: 1.474776 }
	});
	var marker1 = new google.maps.Marker({
		position: uka,
		map: map,
		title: "I was born here!"
	});
	var bryansk = new google.maps.Marker({
		position: { lat: 53.304458, lng: 34.312140 },
		map: map,
		title: "I lived here for 5 years, and studied computer science"
	});

	var portland = new google.maps.Marker({
		position: { lat: 45.570655, lng: -122.799300 },
		map: map,
		title: "I lived here for 2 years"
	});
	var charlotte = new google.maps.Marker({
		position: { lat: 35.221194, lng: -80.840227 },
		map: map,
		title: "Now, I live here, and I'm studying computer science again (Web-development)"
	});
}


const MyMapComponent = (props) =>
<GoogleMap
defaultZoom={8}
defaultCenter={{ lat: -34.397, lng: 150.644 }}
>
{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
</GoogleMap>

<MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map


const Map = (props)=>{
	return <div>
	<h1>
	Hello map!
	</h1>
	<div id="map"></div>

	</div>
}
export default Map;