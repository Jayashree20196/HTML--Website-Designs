$(window).scroll(function () {
    // check if user scrolled more than 50 from top of the browser window
    if ($(document).scrollTop() > 50) {
        //the go-top class is visible by setting display as inline
        $("#go-top").css("display", "inline");
    } else {
        //the go-top class is hidden by setting display as none
        $("#go-top").css("display", "none");
    }
})
 
 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    var uluru = {lat: 19.663280 , lng: 75.300293};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});
$('#videoLink').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  })

