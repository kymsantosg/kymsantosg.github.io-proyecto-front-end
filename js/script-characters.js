$(document).ready(function(){
    var root= "https://swapi.co/api/people/";

    uploadCharacters(root);

    function uploadCharacters(url){
        
        $.ajax ({
            url: url,
            method: 'GET',
            success: function(data) {
                console.log(data);
                $('#characters').empty();
                var lista = '';
                                
                for(var i=0; i < data.results.length; i++){
                   
                    lista += '<div class="col-md-7">';
                    lista += '<div class="about-right text-left">';
                    lista += '<h3 style="color:yellow">'+data.results[i].name+'</h3>';
                    
                    lista += '<strong><span>Species: </span></strong>';
                    lista += '<ul> ';
                            for(var j=0; j < data.results[i].species.length; j++) {
                                lista += uploadSpecies(data.results[i].species[j]); 
                            } 
                    lista += '</ul>';

                    lista += '<strong><span>Homeworld: </span></strong>';
                    lista += '<ul> '+uploadPlanets(data.results[i].homeworld);
                    lista += '</ul>';


                    lista += '<strong><span>Language: </span></strong>';
                    lista += '<ul> '
                        for(var j=0; j < data.results[i].species.length; j++) {
                            lista += uploadLanguage(data.results[i].species[j]); 
                        }       
                    lista += '</ul>';


                    lista += '<strong><span>Films: </span></strong>';
                    lista += '<ul> ';
                            for(var j=0; j < data.results[i].films.length; j++) {
                                lista += uploadFilms(data.results[i].films[j]); 
                            }
                    lista += '</ul>';

                    lista += '</div>';
                    lista += '</div>';

                }
                $('#characters').html(lista);

                $('#prevcharacters').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                    uploadCharacters(data.previous);
                });

                $('#nextcharacters').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null)
                    uploadCharacters(data.next);
                });
            },

            error: function(e) {
                console.log(e);
            },

        });
    }

});

function uploadSpecies(url) {
    var nameSpecies = '';
    $.ajax ({
        url: url,
        method: 'GET',
        async:false,
        success: function(data) {
            nameSpecies += '<li> Name: ' + data.name + '</li>'
            nameSpecies += '<li> Classification: ' + data.classification + '</li>'
            nameSpecies += '<br>'
        //console.log(data);
        },
        error: function(e) {
            console.log(e);
        },

});
return nameSpecies;
}

function uploadPlanets(url) {
    var namePlanets = '';
    $.ajax ({
        url: url,
        method: 'GET',
        async:false,
        success: function(data) {
            namePlanets +='<li>' + data.name + '</li>'
            namePlanets += '<br>'
        //console.log(data);
        },
        error: function(e) {
            console.log(e);
        },

});
return namePlanets;
}

function uploadLanguage(url) {
    var language = '';
    $.ajax ({
        url: url,
        method: 'GET',
        async:false,
        success: function(data) {
            language += '<li>' + data.language + '</li>'
            language += '<br>'
        //console.log(data);
        },
        error: function(e) {
            console.log(e);
        },

});
return language;
}

function uploadFilms(url) {
    var nameFilms = '';
    $.ajax ({
        url: url,
        method: 'GET',
        async:false,
        success: function(data) {
            nameFilms +='<li> Episode: ' + data.episode_id + ' - Title: ' + data.title + '</li>'
        
        //console.log(data);
        },
        error: function(e) {
            console.log(e);
        },

});
return nameFilms;
}
console.log(document);