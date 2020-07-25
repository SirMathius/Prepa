$(document).ready(function() {
    
    var origin = location.origin;
    
    $('#header').load('/views/templates/header.html', function(){
        checkOffset();
    });
    $('#footer').load('/views/templates/footer.html');
});