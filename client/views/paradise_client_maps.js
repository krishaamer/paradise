/* MAPS */

var Markers;
Meteor.subscribe('markers');
Markers = new Meteor.Collection('markers');

Template.map.rendered = function() {

	//mixpanel.track("Map Loaded");

	L.Icon.Default.imagePath = 'packages/leaflet/images';

	window.map = L.map('map', {
	  doubleClickZoom: true
	}).setView([0.344, 6.730], 12);

	L.tileLayer("http://a.tiles.mapbox.com/v3/krishaamer.map-gbywi8nf/{z}/{x}/{y}.png", {  
	  attribution: ''
	}).addTo(window.map);

	var marker_alex = L.marker([0.33328, 6.72824]).addTo(window.map);
	marker_alex.bindPopup("<a href='#flipboard'><img class='img-rounded' src='artists/alex-keller-fonseca-90.jpg' /><div style='width:100px;'><h3 style='color:#000;'>Alex-Keller Fonseca</h3></div></a>");

	var marker_rene = L.marker([0.33994, 6.72913]).addTo(window.map);
	marker_rene.bindPopup("<a href='#flipboard'><img class='img-rounded' src='artists/rene-tavares-90.jpg' /><div><h3 style='color:#000;'>René Tavares</h3></div></a>");

	var marker_catita = L.marker([0.3395, 6.7132]).addTo(window.map);
	marker_catita.bindPopup("<a href='#flipboard'><img class='img-rounded' src='artists/catita-dias-90.jpg' /><div><h3 style='color:#000;'>Catita Dias</h3></div></a>");

	var marker_leonel = L.marker([0.3080, 6.7134]).addTo(window.map);
	marker_leonel.bindPopup("<a href='#flipboard'><img class='img-rounded' src='artists/leonel-varela-90.jpg' /><div><h3 style='color:#000;'>Leonel Varela</h3></div></a>");

	var marker_osvaldo = L.marker([0.2517, 6.7408]).addTo(window.map);
	marker_osvaldo.bindPopup("<div><h3 style='color:#000;'>Osvaldo Reis</h3></div>");

	var marker_nezo = L.marker([0.1337, 6.6484]).addTo(window.map);
	marker_nezo.bindPopup("<a href='#flipboard'><img class='img-rounded' src='artists/nezo-90.jpg' /><div><h3 style='color:#000;'>Nezo</h3></div></a>");

	var marker_nelito = L.marker([0.1307, 6.6459]).addTo(window.map);
	marker_nelito.bindPopup("<a href='#flipboard'><img class='img-rounded' src='artists/nelito-pereira-90.jpg' /><div><h3 style='color:#000;'>Nelito Pereira</h3></div></a>");

};