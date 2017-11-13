$(document).ready(function(){
    var root= "https://swapi.co/api/films/";
        
    $.ajax ({
        url: root,
        method: 'GET',
        success: function(data) {
           console.log(data);
           var film ='';
           for(var i=0; i < data.results.length; i++) {
                film +='<!-- Modal -->';
                    film +='<div id="myModal'+i+'" class="modal fade">';
                film +='<div class="modal-dialog">';
                film +='<!-- Modal content-->';
                film +='<div class="modal-content modal"';
                film +='<div class="modal-header">' 
                    film +='<h4 class="modal-title" style="color:yellow"> Episode: ' + data.results[i].episode_id + ' - ' + data.results[i].title + '</h4>';
                film +='</div>';
                film +='<div class="modal-body text-left">';
                    film +='<strong><span> Date</strong></span>: ' + data.results[i].release_date+ '<br>'+ '<br>';
                    film +='<strong><span> Direct by:</strong></span> ' + data.results[i].director+ '<br>'+ '<br>';
                    film +='<strong><span>Produced by:</strong></span> ' + data.results[i].producer + '<br>'+ '<br>';
                    film +='<strong><span>Synopsis:</strong></span>' + '<br>'+ '<br>';
                    film +='<p style="text-align:justify;"> ' + data.results[i].opening_crawl.substring(0,700) + '</p>';
                    film +='<strong><span>Characters:</strong></span> ';
                       film += '<ul>';
                            for(var j=0; j < data.results[i].characters.length; j++) {
                            film += uploadCharactersFilms(data.results[i].characters[j]);
                            }
                        film += '</ul>';
                film +='</div>';
                film +='<div class="modal-footer">';
                    film +='<button type="button" class="btn btn-default btn-lg" data-dismiss="modal">Close</button>';
                film +='</div>';
                film +='</div>';
                film +='</div>';
                film +='</div>';
                console.log(film);
           }
            console.log(film);
            $("#peliculas").html(film); 
        },
  
        error: function(e) {
            console.log(e);
        },

    });
});

function uploadCharactersFilms(url) {
    var nameCharacters = '';
    $.ajax ({
        url: url,
        method: 'GET',
        async:false,
        success: function(data) {
            nameCharacters='<li style="text-align:left;">' + data.name + '</li>'
        console.log(data);
        },
        error: function(e) {
            console.log(e);
        },
    });
    return nameCharacters;
}
console.log(document);

