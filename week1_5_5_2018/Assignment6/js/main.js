$(document).ready(function(){
    $("#getLocation").click(function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        } 
    });

    function showPosition(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        var myCenter = new google.maps.LatLng(latitude,longitude);
        var mapCanvas = document.getElementById("mapholder");
        var mapOptions = {center: myCenter, zoom: 14};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var img = 'https://static.getjar.com/icon-50x50/a3/894077_thm.png';
        var marker = new google.maps.Marker(
            {position:myCenter,
            animation:google.maps.Animation.DROP,
            icon: img
        });
        marker.setMap(map);
        google.maps.event.addListener(marker,'click',function() {
          var infowindow = new google.maps.InfoWindow({
            content:"This is your Location!"
          });
        infowindow.open(map,marker);
        });
    }
});