$(function(){

	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	});
});

$('.screenshots-slider').owlCarousel({
    items: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: {
        1024: {
            items: 4,
            dotsEach: 5
        },
        992: {
            items: 3,
            dotsEach: 5
 
        },
        768: {
            items: 2,
            dotsEach: 5

        },
        0: {
            items: 1,
            dotsEach: 5

        }
    }
});

$('.testimonials-slider').owlCarousel({
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000
});