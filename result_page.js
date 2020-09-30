
var lng = localStorage.getItem("geo_lng")
var lat = localStorage.getItem("geo_lat")
var keyword = localStorage.getItem("geo_resto_type")
var radiusSelect = localStorage.getItem("geo_radius")
var map = null;
var bounds = null;
var resto_bounds = null;
var service = null;
var directionsService = null;
var directionsRenderer = null;
var my_position_marker = null;
var infowindow = null;

show_location_details = function (response, status) {
	console.log(response)
	var photo_array = response.photos;


	$("#resto-photos").html("");


	for (var idx = 0; idx <= 2; idx++) {
		var photo_item = photo_array[idx];
		var image_link = photo_item.getUrl({ maxWidth: 300, maxHeight: 300 });
		console.log(image_link);

		var cardImg = $('<div>').attr({ "class": "card align-center", "width": "100%" });
		var cardBodyImg = $('<div>').attr({ "class": "card-body" });


		var imgShow = $('<img>').attr({ "class": "img img-responsive", "src": image_link });
		//"<img class='img img-responsive' src='" + image_link + "'/>");

		cardBodyImg.append(imgShow)
		cardImg.append(cardBodyImg)
		$("#resto-photos").append(cardImg);


	}
}

render_direction_on_map = function (response, status) {
	console.log(response)
	console.log(status)
	if (status == 'OK') {
		directionsRenderer.setDirections(response);
	}
}

show_markers_on_map = function (result) {
	for (var idx = 0; idx < result.length; idx++) {
		var loc_item = result[idx]
		var marker = new google.maps.Marker({
			position: loc_item.geometry.location,
			map: map,
			title: loc_item.name,
			customInfo: loc_item
		});
		bounds.extend(marker.getPosition())


		google.maps.event.addListener(marker, "click",
			function (response) {
				var marker_location = this.position
				var location_data = this.customInfo


				let request = {
					placeId: location_data.place_id,
					fields: ['name', 'formatted_address', 'geometry', 'rating',
						'website', 'photos']
				};
				service.getDetails(request, show_location_details);

				$(".resto-info").html("");


				var restoCard = $('<div>').attr({ "class": "card shadow m-4 ml-3 flex-container" })
				var restoCardBody = $('<div>').attr({ "class": "card-body" });

				var nameofresto = $('<p>').html("Name of Restaurant: " + "<mark>" + location_data.name + "</mark>");
				var addressofresto = $('<p>').html("Address of Restaurant: " + "<mark>" + location_data.vicinity + "</mark>");
				var ratingofresto = $('<p>').html("Rating of Restaurant: " + "<mark>" + location_data.rating + "</mark>");

				restoCardBody.append(nameofresto, addressofresto, ratingofresto);
				restoCard.append(restoCardBody);

				$(".resto-info").append(restoCard);

				var request_direction = {
					origin: my_position_marker.getPosition(),
					destination: marker_location,
					travelMode: google.maps.TravelMode["DRIVING"]

				};
				directionsService.route(request_direction, render_direction_on_map)
				infowindow.setContent(location_data.name + "<br>" + location_data.vicinity)
				infowindow.open(map, this);
			}
		)
	}
	map.fitBounds(bounds);
}

get_nearby_places = function (current_position, keyword) {
	let request = {
		location: current_position,
		keyword: keyword,
		radius: parseInt(radiusSelect)
	};
	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, get_nearby_places_callback);
}

get_nearby_places_callback = function (response) {
	console.log(response);
	if (response.length == 0) {
		alert("no places found")
	}
	show_markers_on_map(response)
}



initMap = function () {
	///// INIT DISPLAY ////

	document.querySelector("#keyword_id").innerHTML = keyword;

	pos = {
		lat: parseFloat(lat),
		lng: parseFloat(lng)
	};
	directionsService = new google.maps.DirectionsService();
	directionsRenderer = new google.maps.DirectionsRenderer();
	bounds = new google.maps.LatLngBounds();
	infowindow = new google.maps.InfoWindow();
	resto_bounds = new google.maps.LatLngBounds();
	map = new google.maps.Map(document.getElementById('map'), {
		center: pos,
		zoom: 15,
		mapTypeId: 'satellite'
	});
	my_position_marker = new google.maps.Marker({
		position: pos,
		map: map,
		icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png"
	});
	directionsRenderer.setPanel(document.getElementById('directionsPanel'));
	directionsRenderer.setMap(map);

	bounds.extend(my_position_marker.getPosition())

	get_nearby_places(
		pos,
		keyword
	)
}
