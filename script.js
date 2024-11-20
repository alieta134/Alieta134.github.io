function iniciarMap() {
  var coord = {lat: -17.402019, lng: -66.036740}; // Elimina el valor extra
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17, // Puedes ajustar el nivel de zoom
      center: coord
  });
  var marker = new google.maps.Marker({
      position: coord,
      map: map
  });
}
