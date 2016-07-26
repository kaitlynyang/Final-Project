function initMap() {
    var Newmap = new google.maps.Map(document.getElementById('map'), {
    	center:  {lat:21.007890, lng: -10.940835},
      zoom: 1
    });
// Environment Events
        var enviro1 = new google.maps.Marker({
        	position: {lat:53.955820, lng: -1.079940},
        	map: Newmap,
        	title: "No Fracking Demonstration\nJuly 30, 2016\n12:00pm to 2:30pm\nCliffords Tower, Yorkshire, England",
          icon: "images/greendot.jpg"
        });

        var enviro2 = new google.maps.Marker({
          position: {lat:33.839408, lng: -118.390386},
          map: Newmap,
          title: "Nothin' But Sand Beach Cleanup\nAugust 20, 2016\n10:00am to 12:00pm\nRedondo Beach Pier, Redondo Beach, California",
          icon: "images/greendot.jpg"
        });

// Feminism Events
    		var feminism1 = new google.maps.Marker({
    			position: {lat:38.907192, lng:-77.036871},
    		  map: Newmap,
    		  title: "National Sexual Assault Conference 2016\nAugust 31, 2016\nAll day\n2660 Woodley Road NW, Washinton, DC",
          icon: "images/reddot.jpg"
    		});

        var feminism2 = new google.maps.Marker({
          position: {lat:-34.630629, lng:-58.427403},
          map: Newmap,
          title: "Association for Women's Rights in Development International Forum\nSeptember 8-11, 2016\nCosta do Sauipe, Bahia, Brazil",
          icon: "images/reddot.jpg"
        });


// Human Rights Events
        var humanrights1 = new google.maps.Marker({
            position: {lat:40.820897, lng:-73.953896},
            map: Newmap,
            title: "The People’s Resistance to the Venezuelan Food Crisis\nJuly 30, 2016\n4:00pm to 6:00pm\n9A Hamilton Place, Boston, Massachusetts",
            icon: "images/yellowdot.jpg"
        });

        var humanrights2 = new google.maps.Marker({
            position: {lat:34.274531, lng:-119.300538},
            map: Newmap,
            title: "Ventura County Pride\nAugust 20, 2016\n11:00am - 6:00pm\nPromenade Park, Ventura, California",
            icon: "images/yellowdot.jpg"
        });

// Education Events
        var education1 = new google.maps.Marker({
            position: {lat:46.905900, lng:-95.058900},
            map: Newmap,
            title: "Educational Equity in Action\nJune 20 & 21, 2016\nUniversity of Minnesota West Bank Campus",
            icon: "images/bluedot.jpg"
        });

        var education2 = new google.maps.Marker({
            position: {lat:37.774929, lng:-122.419416},
            map: Newmap,
            title: "Summit on Improvement in Education\nMarch 27-29, 2017\nSan Francisco Marriott Marquis",
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

// hover code
function mouseOver() {
  var nichole = document.getElementById("nichole");
  nichole.src = "images/ironman.jpg";
}
function mouseOut() {
  var nichole = document.getElementById("nichole");
  nichole.src = "images/nichole.jpg";
}

function mouseOver1() {
  var lili = document.getElementById("lili");
  lili.src = "images/michaelscottdead.jpg";
}
function mouseOut1() {
  var lili = document.getElementById("lili");
  lili.src = "images/lili.jpg";
}