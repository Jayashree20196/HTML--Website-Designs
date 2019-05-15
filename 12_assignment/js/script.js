$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#mainNavbar').css('background-color', 'white');
        $('.nav-link').css('color', '#515769')
        $('.dark-logo').css('display', 'block');
        $('.light-logo').css('display', 'none');
        $('.goto-top').css('display', 'block');
    } else {
        $('#mainNavbar').css('background-color', 'transparent');
        $('.nav-link').css('color', 'white');
        $('.dark-logo').css('display', 'none');
        $('.light-logo').css('display', 'block');
        $('.goto-top').css('display', 'none');
    }
});

Window.onload = function() {
    new WOW().init();
}

$(".progress-bar").animate({
    width: "75%"
}, 2500);

