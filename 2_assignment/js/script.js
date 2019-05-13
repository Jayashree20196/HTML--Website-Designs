Window.onload = function() {
new WOW().init();
}

$(window).scroll(function () {
    $(window).scroll(function () {
        // check if user scrolled more than 50 from top of the browser window
        if ($(document).scrollTop() > 50) {
            // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            $(".Main-nav").css("background-color", "white");
            
        } else {
            // if not, change it back to transparent
            $(".Main-nav").css("background-color", "transparent");
            
        }
    })
});