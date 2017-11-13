$(document).ready(function(){
    var root= "https://swapi.co/api/vehicles/";

    uploadVehicles(root);

    function uploadVehicles(url){
        
        $.ajax ({
            url: url,
            method: 'GET',
            success: function(data) {
                console.log(data);
                $('#vehicles2').empty();
                var lista = '';
                for(var i=0; i < data.results.length; i++){
              
                    lista += '<button ';
                    lista += 'data-name="'+data.results[i].name+'"';
                    lista += 'data-model="'+data.results[i].model+'"';
                    lista += 'data-length="'+data.results[i].length+'"';
                    lista += 'data-crew="'+data.results[i].crew+'"';
                    lista += 'data-passengers="'+data.results[i].passengers+'"';
                    lista += 'data-vehicle_class="'+data.results[i].vehicle_class+'"';
                    lista += 'data-toggle="modal" data-target="#myModalvehicles" type="button" class="btn btn-default btn-lg" href="#">'+data.results[i].name+'</button>';
                
                }

                $('#vehicles2').html(lista);

                $('#prevvehicles').on('click',function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                    uploadVehicles(data.previous);
                });

                $('#nextvehicles').on('click',function(e){
                    e.preventDefault();
                    if(data.next!=null)
                    uploadVehicles(data.next);
                });

            },

            error: function(e) {
                console.log(e);
            },

        });
    }
    $('#myModalvehicles').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('name'));
        $(this).find('.modal-body').html("<strong><span>Model: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('model'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<strong><span>Length: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('length'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<strong><span>Crew: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('crew'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<strong><span>Passengers: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('passengers'));
        $(this).find('.modal-body').append("<br>");
        $(this).find('.modal-body').append("<strong><span>Class: </span></strong>");
        $(this).find('.modal-body').append($(e.relatedTarget).data('vehicle_class'));

    });
   
});
console.log(document);