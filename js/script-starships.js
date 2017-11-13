$(document).ready(function(){
    var root= "https://swapi.co/api/starships/";

    uploadStarships(root);

    function uploadStarships(url){
        
        $.ajax ({
            url: url,
            method: 'GET',
            success: function(data) {
                console.log(data);
                $('#starships2').empty();
                var lista = '';
                for(var i=0; i < data.results.length; i++){
        
                    lista += '<button ';
                    lista += 'data-name="'+data.results[i].name+'"';
                    lista += 'data-model="'+data.results[i].model+'"';
                    lista += 'data-manufacturer="'+data.results[i].manufacturer+'"';
                    lista += 'data-crew="'+data.results[i].crew+'"';
                    lista += 'data-passengers="'+data.results[i].passengers+'"';
                    lista += 'data-toggle="modal" data-target="#myModalstarships" type="button" class="btn btn-default btn-lg" href="#">'+data.results[i].name+'</button>';
                            
                }

                $('#starships2').html(lista);

                $('#prevstarships').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                    uploadStarships(data.previous);
                    
                });

                $('#nextstarships').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null)
                    uploadStarships(data.next);
                });

            },

            error: function(e) {
                console.log(e);
            },

        });
    }
    $('#myModalstarships').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('name'));
        $(this).find('.modal-body').html("<span><strong>Model: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('model'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<span><strong>Length: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('manufacturer'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<span><strong>Crew: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('crew'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<span><strong>Passengers: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('passengers'));

    });
   
});
console.log(document);