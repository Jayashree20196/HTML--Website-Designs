$(document).ready(function(){
  

   $(".filter-button").click(function(){
    $(".filter-button").removeClass('portfolio-active');
      var value = $(this).attr('data-filter');
      $(this).addClass("portfolio-active");
      if(value == "all")
      {
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });

});

$(window).scroll(function () {
  // check if user scrolled more than 50 from top of the browser window
  if ($(document).scrollTop() > 50) {
      // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      $("#mainNavbar").css("background-color", "#101010");
      //the go-top class is visible by setting display as inline
      $("#go-top").css("display", "inline");
  } else {
      // if not, change it back to transparent
      $("#mainNavbar").css("background-color", "transparent");
      //the go-top class is hidden by setting display as none
      $("#go-top").css("display", "none");
  }
})