$(document).ready(function () {
    
    $('#eliminar').on('click', function (event) {
        event.preventDefault(); 
        var card = $(this).closest('.card');
        card.remove();
        alert("se elimino supuestamente");
    });
});