if( document.getElementById('map') ) {

	var map;
	var marker;
	// var image = "img/map_marker.png";
	// var styles;

	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 57.6087889, lng: 39.9864077},
			scrollwheel: false,
			scaleControl: false,
			zoom: 17
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 57.6087889, lng: 39.9864077},
			map: map,
			// icon: image,
			title: 'Регион-Сервис'
		});

		marker.addListener('click', toggleBounce);

	}

	function toggleBounce() {
	  if (marker.getAnimation() !== null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}

}



