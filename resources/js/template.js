$(document).ready(function() {
    
    var origin = location.origin;
    
    $('#header').load(getBaseUrl() + '/views/templates/header.html', function(){
        checkOffset();
        replaceUrl();
    });
    $('#footer').load(getBaseUrl() + '/views/templates/footer.html');
});