//function initMap() {
  // The location of Ostrovok detstva
  //var Ostrovok = {lat: 43.153105, lng: 131.9128885};
  //var map = new google.maps.Map(
      //document.getElementById('map'), {zoom: 15, center: Ostrovok});
  // The marker, positioned at Uluru
  //var marker = new google.maps.Marker({position: Ostrovok, map: map});
//};//

function initMap() {
	
	var ostrovok1 = {
        info: '<strong>«Островок Детства» </strong><br>\r\
        г. Владивосток, ул. Южно-Уральская, 10 а<br>\
        ',
		lat: 43.153105,
		long: 131.9128885
	};

	var ostrovok2 = {
        info: '<strong>«Островок Детства» </strong><br>\r\
        г. Владивосток, ул. Красного знамени, 137<br>\
        ',
		lat: 43.1235269,
		long: 131.9311762
	};


	var locations = [
      [ostrovok1.info, ostrovok1.lat, ostrovok1.long, 0],
      [ostrovok2.info, ostrovok2.lat, ostrovok2.long, 1],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(43.1379372, 131.9193286),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}