//Attempt 1 at location//
// function getLocation() {
// 	console.log("got location");
// 	var address = document.getElementById("address1");
//   	var geocoder = new google.maps.Geocoder();
// 	geocoder.geocode( { 'address': address}, function(results, status) {

// 	if (status == google.maps.GeocoderStatus.OK) {
// 	   	var latitude = results[0].geometry.location.lat();
// 	    var longitude = results[0].geometry.location.lng();
// 	    console.log(latitude, longitude);
// 	    }
// 	});
// }

//Attempt 2 at location//

function initMap() {
    var Newmap = new google.maps.Map(document.getElementById('map'), {
    	center:  {lat:-25.274, lng: 133.775},
        zoom: 1
    });

        var marker1 = new google.maps.Marker({
        	position: {lat:-25.274, lng: 133.775},
        	map: Newmap,
        	title: "Australia"
        });

		var marker2 = new google.maps.Marker({
			position: {lat:-40.9, lng:174.88},
		    map: Newmap,
		    title: "New Zealand"
		});

        var marker3 = new google.maps.Marker({
            position: {lat:33.93, lng:-118.38},
            map: Newmap,
            title: "New Zealand"
        });


}

// function initMap() {
//     var mapDiv = document.getElementById("map");
//     var map = new google.maps.Map(mapDiv, {
//         center: {lat: -100, lng: 100},
//         zoom: 10
//     });
//}