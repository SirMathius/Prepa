$(document).ready(function() {

    var waypoint = new Waypoint({
    element: document.getElementById('anchor'),
    handler: function(direction) {
        if(direction == 'down'){
           $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }});  
});

function checkOffset() {
    var current = $(window).scrollTop(),
    element = $('#anchor').offset().top,
    distance = (element - current);
    
    if(distance <= 0) {
       $('nav').addClass('sticky');
    }
}

