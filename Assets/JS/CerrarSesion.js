$(document).ready(function () {
    // Obtener el botón de cerrar sesión
    var cerrarSesionBtn = $('#Sesion');

    // Manejar el evento de clic en el botón de cerrar sesión
    cerrarSesionBtn.on('click', function () {
        cerrarSesion();
    });

    // Función para cerrar sesión
    function cerrarSesion() {
        // Eliminar la información de la sesión actual en localStorage
        localStorage.removeItem('usuarioActual');

        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = './Inicio.html';
    }
});