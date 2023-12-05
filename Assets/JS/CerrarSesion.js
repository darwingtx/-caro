$(document).ready(function () {

    var cerrarSesionBtn = $('#Sesion');

    cerrarSesionBtn.on('click', function () {
        cerrarSesion();
    });

    function cerrarSesion() {
        localStorage.removeItem('usuarioActual');
        window.location.href = './Inicio.html';
    }


});