$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#mainNavbar').css('background-color', 'black');
    } else {
        $('#mainNavbar').css('background-color', 'rgba(0, 0, 0, 0.10');
    }
});

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});