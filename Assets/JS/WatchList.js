$(document).ready(function () {
    // Agregar evento de clic a los íconos de eliminar
    $('#eliminar').on('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Obtener la card padre y eliminarla
        var card = $(this).closest('.card');
        card.remove();
        alert("se elimino supuestamente");
    });
});