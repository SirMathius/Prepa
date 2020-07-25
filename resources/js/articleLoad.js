var menuItems = [];
var textPath = '/material/textos';
var imgPath = '/material/imagenes';
var downloadPath = 'material/descarga'
var origin = window.location.origin;

$(document).ready(function() {
    
    $(document).on('click', 'a.article-link', function(){
        event.preventDefault();
        loadArticle($(this).attr('href'), true);       
    });
    
    loadNames(loadMenues);

});
    
function loadMenues() {   
    loadArticleMainMenu();
    
    if(window.location.href.includes('article')){
        loadArticleMenu();
        loadArticle();
    }
    
}

function loadNames(callback) {
    $.ajax({
        url: textPath,
        success: function (data) {
            $(data).find("a:contains(" + '.html' + ")").each(function () {
                var text = $(this).text().replace('.html', '');    
                menuItems.push(text);
            });
            
            if(callback){
                callback();
            }
        }
    });
}

function formatUpperCase(text){
    return text.replace(/-/g, ' ').toUpperCase();
}

function formatCapitalize(text) {
    
    var cleanText = text.replace(/-/g, ' ');
    
    return cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
}



function loadArticle(key, transition) {
    
    if(!key){
        var selectedArticle = getParam('article');
        if(selectedArticle){
           key = selectedArticle;
        } else {
          key =  menuItems[0];   
        }
        
    }
    
    loadArticleTitle(key, transition);
    loadArticleText(key, transition);
    loadArticleImg(key, transition);
    loadArticleDownloadLink(key);
    
    setSelected(key);
}

function setSelected(key) {
    $('a.article-link').removeClass('active');
    $('#' + key).addClass('active');
}

function loadArticleTitle(key, transition){
    if(transition) {
       $('#article-title').fadeTo('fast', 0.3, function() {
            $('#article-title').text(formatUpperCase(key));
         }).fadeTo('fast', 1);
    } else {
        $('#article-title').text(formatUpperCase(key));
    }
   
}


function loadArticleText(key, transition){
    $.get(textPath + '/' + key + '.html', function(data) {        
        if(data) {
            
            if(transition){
               $('#article-text').fadeTo('fast', 0.3, function() {
                $(this).html(data);
                }).fadeTo('fast', 1);
            } else {
               $('#article-text').html(data); 
            }
        }
    });
}

function loadArticleImg(key, transition){
    if(transition) {
      $('#article-img').fadeTo('fast', 0.3, function() {
            $(this).css('background-image', 'url("'+imgPath +'/' + key + '.jpg")');
        }).fadeTo('fast', 1);   
    } else {
       $("#article-img").css('background-image', 'url("'+imgPath +'/' + key + '.jpg")');
    }
 
}

function loadArticleDownloadLink(key){
    $("#article-btn-download").attr('href', origin + '/' + downloadPath +'/' + key + '.pdf');
}

function loadArticleMenu () {
    var menu = $('#article-menu');
    
    if(menu) {
       $(menuItems).each(function( index) {
            var formattedText = formatUpperCase(menuItems[index]);
           menu.append('<a id="' + menuItems[index] + '"type="button" class="article-link" href="' + menuItems[index]  + '">' + formattedText + '</a>');
        });
    }    
}

function loadArticleMainMenu () {
    var menu = $('#article-main-menu');
    
    if(menu) {
      $(menuItems).each(function( index) {
            var formattedText = formatCapitalize(menuItems[index]);
            menu.append('<a class="dropdown-item" href="/views/article.html?article=' + menuItems[index]  + '">' + formattedText + '</a>');
        }); 
    }   
}


