$(document).ready(function() {
    
    var origin = location.origin;
    
    $('#header').load('https://sirmathius.github.io/prepa-website/views/templates/header.html', function(){
        checkOffset();
    });
    $('#footer').load('https://sirmathius.github.io/prepa-website/views/templates/footer.html');
});