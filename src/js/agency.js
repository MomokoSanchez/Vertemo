// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Animate Icons by animate.css
    $('#services .fa-list-ol').hover(function(){
        $(this).toggleClass('animated bounceIn');
    });

    $('#services .fa-comments-o').hover(function(){
        $(this).toggleClass('animated swing');
    });

    $('#services .fa-play').hover(function(){
        $(this).toggleClass('animated lightSpeedOut');
    });

    $('#contact .fa-envelope').hover(function(){
        $(this).toggleClass('animated zoomOutRight');
    });

    //replacing portfolio images with mobile version. This is annoying. Is there no other solution?
    if (window.matchMedia("(max-width: 767px)").matches) {
      $("#licht-gray").attr('src',"img/portfolio/project1-gray-mobile.jpg");
      $("#licht-color").attr('src',"img/portfolio/project1-mobile.jpg");
      $("#ton-gray").attr('src',"img/portfolio/project2-gray-mobile.jpg");
      $("#ton-color").attr('src',"img/portfolio/project2-mobile.jpg");
      $("#video-gray").attr('src',"img/portfolio/project3-gray-mobile.jpg");
      $("#video-color").attr('src',"img/portfolio/project3-mobile.jpg");
      $("#buehne-gray").attr('src',"img/portfolio/project4-gray-mobile.jpg");
      $("#buehne-color").attr('src',"img/portfolio/project4-mobile.jpg");
    } else {
      $("#licht-gray").attr('src',"img/portfolio/project1-gray.jpg");
      $("#licht-color").attr('src',"img/portfolio/project1.jpg");
      $("#ton-gray").attr('src',"img/portfolio/project2-gray.jpg");
      $("#ton-color").attr('src',"img/portfolio/project2.jpg");
      $("#video-gray").attr('src',"img/portfolio/project3-gray.jpg");
      $("#video-color").attr('src',"img/portfolio/project3.jpg");
      $("#buehne-gray").attr('src',"img/portfolio/project4-gray.jpg");
      $("#buehne-color").attr('src',"img/portfolio/project4.jpg");
    }

})(jQuery); // End of use strict
