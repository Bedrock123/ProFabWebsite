(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
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
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


var body = $('#indexHeader');
    var backgrounds = [
        'url("./img/pro-fab-compressed/profab-race-car-overlay.jpg")', 
        'url("./img/pro-fab-compressed/profab-slide2.jpg")', 
        'url("./img/pro-fab-compressed/profab-slide3.jpg")', 
    ];
    var current = 0;

    function nextBackground() {
        $(body).animate({background: "#222"}, 'slow');
        $(body).fadeTo('fast', 0.8, function() {
        
            body.css('background', backgrounds[current = ++current % backgrounds.length]);
        
        }).fadeTo('fast', 1);

        setTimeout(nextBackground, 6000);
    }
    setTimeout(nextBackground, 6000);

    body.css('background', backgrounds[0]);

})(jQuery); // End of use strict



