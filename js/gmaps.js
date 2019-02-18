//
function initMap() {
        var uluru = {lat: 26.131634, lng: -14.478050};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
//



	  
//26°07'53.9"N 14°28'41.0"W