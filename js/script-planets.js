$(document).ready(function(){
    var root= "https://swapi.co/api/planets/";

    uploadPlanets(root);

    function uploadPlanets(url){
        
        $.ajax ({
            url: url,
            method: 'GET',
            success: function(data) {
                console.log(data);
                $('#planeta').empty();
                var lista = '';
                for(var i=0; i < data.results.length; i++){
             
                    lista += '<ul class="features-list features-list-right">';
                    lista += '<div class="features-content">';
                    lista += '<h5 style="color:yellow">'+data.results[i].name+'</h5>';
                    lista += '<li> <strong><span>Diameter: </strong></span>' +data.results[i].diameter+ '</li>';
                    lista += '<li> <strong><span>Climate: </strong></span>' +data.results[i].climate+ '</li>';
                    lista += '<li> <strong><span>Terrain: </strong></span>' +data.results[i].terrain+ '</li>';
                    lista += '<li> <strong><span>Surface Water: </strong></span>' +data.results[i].surface_water+ '</li>';
                    lista += '<li> <strong><span>Population: </strong></span>' +data.results[i].population+ '</li>';
                    lista += '</div>';
                    lista += '</ul>';

                }

                $('#planeta').html(lista);

                $('#prevplanets').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                    uploadPlanets(data.previous);
                });
                
                $('#nextplanets').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null)
                    uploadPlanets(data.next);
                });
            },
            
            error: function(e) {
                console.log(e);
            },

        });
    }
      
});
console.log(document);