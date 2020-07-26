$(document).ready(function() {
    
    $(document).on('click', 'a[href*="#"]:not([href="#"]):not([href="#0"])', function(){
        // On-page links
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && location.hostname == this.hostname ) {
              // Figure out element to scroll to
              var target = $(this.hash);            
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {});
            }
        }
    });
});

function getParam(key) {
    var searchParams = window.location.search;
    var params = searchParams.substring(1, searchParams.length);
    
    if(params){
        params = params.split('&');
        var value;
        $(params).each(function(idx) {
            var param = params[idx].split('=');
            
            if(param[0] == key){
               value = param[1];
            }
        });
        
        return value;
    }   
}

function getBaseUrl(){
    
    var base = window.location.origin;
    
    if(window.location.pathname.includes('prepa-website')){
       base = base + '/prepa-website'
    }
       
    return base;
}

