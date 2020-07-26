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

function replaceUrl(){
   
    var links = $('header a');
    
    links.each(function(idx) {
         $(links[idx]).attr('href', getBaseUrl() + $(links[idx]).attr('href'));
    });  

    var logo = $('header img');
    $(logo).attr('src', getBaseUrl() + $($(logo).attr('src'));
    
}

