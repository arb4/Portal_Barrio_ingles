
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-30.612588, -71.213718],
    zoom: 17,
    zoomControl: true
});


				
var	grupos_ovalle = L.geoJson(grupos_ovalle, {	
              	    style: function(feature) {
        switch (feature.properties.NUMPOINTS) {
            case '98': return {color: "yellow"};
            case '114':   return {color: "green"};
			case '124':   return {color: "blue"};
			case '110':   return {color: "orange"};
			case '81':   return {color: "olive"};
			case '119':   return {color: "teal"};
			case '97':   return {color: "purple"};
			case '93':   return {color: "red"};
			case '127': return {color: "yellow"};
            case '113':   return {color: "green"};
			case '92':   return {color: "blue"};
			case '126':   return {color: "orange"};
			case '123':   return {color: "olive"};
			case '120':   return {color: "teal"};
			case '109': return {color: "yellow"};
            case '99':   return {color: "green"};
			case '76':   return {color: "blue"};
			case '40':   return {color: "orange"};
			case '141':   return {color: "olive"};
        }
    },

     onEachFeature: function (feature, layer) {
	var txt = "Usted está en el sector donde hay aprox :";	 
	var txt2 = "Homepass";
       layer.bindPopup(txt.fontcolor("DarkGreen")+" "+" "+feature.properties.NUMPOINTS.fontcolor("blue").fontsize(3)+" "+txt2.fontcolor("DarkGreen"));
   } 	
                  
              }).addTo(map);
			  
			  
			  
var style1 = {
                    'color': "red",
                    'weight': 1,
                    'opacity': 5,
					'fillOpacity': 0.5
                };								  
			  
	

var geojsonMarkerOptions = {
    radius: 2.4,
    fillColor: "red",
    color: "red",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
	
 var cent_ovall= L.geoJSON(cent_ovall, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);		  
			  

			  

		  
			  

		  








// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
