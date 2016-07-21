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
    	center:  {lat:21.007890, lng: -10.940835},
        zoom: 1
    });

        var marker1 = new google.maps.Marker({
        	position: {lat:53.955820, lng: -1.079940},
        	map: Newmap,
        	title: "No Fracking Demonstration\nJuly 30, 2016\n12:00pm to 2:30pm\nCliffords Tower, Yorkshire, England",
          icon: "images/greendot.jpg"
        });

    		var marker2 = new google.maps.Marker({
    			position: {lat:38.907192, lng:-77.036871},
    		  map: Newmap,
    		  title: "National Sexual Assault Conference 2016\nAugust 31, 2016\nAll day\n2660 Woodley Road NW, Washinton, DC",
          icon: "images/reddot.jpg"
    		});

        var marker3 = new google.maps.Marker({
            position: {lat:40.820897, lng:-73.953896},
            map: Newmap,
            title: "The People’s Resistance to the Venezuelan Food Crisis\nJuly 30, 2016\n4:00pm to 6:00pm\n9A Hamilton Place, Boston, Massachusetts",
            icon: "images/yellowdot.jpg"
        });

        var marker4 = new google.maps.Marker({
            position: {lat:46.905900, lng:-95.058900},
            map: Newmap,
            title: "Educational Equity in Action\nJune 20 & 21, 2016\nUniversity of Minnesota West Bank Campus",
            icon: "images/bluedot.jpg"
        });

                var icons = {
          Education: {
            name: 'Education',
            icon: 'images/bluedot.jpg'
          },
          Environment: {
            name: 'Environment',
            icon: 'images/greendot.jpg'
          },
          Human_Rights: {
            name: 'Human Rights',
            icon: 'images/yellowdot.jpg'
          },
          Feminism: {
            name: 'Feminism',
            icon: 'images/reddot.jpg'
          }
        };

        var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        };

        Newmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

}
