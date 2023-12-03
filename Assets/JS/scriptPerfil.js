$(document).ready(function () {
    // Obtener los datos del usuario almacenados en localStorage
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));

    // Verificar si hay datos de usuario almacenados
    if (usuarioActual) {
        var s = usuarioActual.pais
        // Mostrar los datos del usuario en los elementos correspondientes
        $('#profile-image').attr('src', './Assets/Images/cuenta.png'); // Cambia esto según cómo manejes las imágenes de perfil
        $('.persona p:nth-child(1)').html('<strong>Nombre:</strong> ' + usuarioActual.nombre);
        $('.persona p:nth-child(2)').html('<strong>Apellido:</strong> ' + usuarioActual.apellido);
        $('.persona p:nth-child(3)').html('<strong>Nombre de Usuario:</strong> ' + usuarioActual.usuario);
        $('.contacto p:nth-child(1)').html('<strong>E-mail:</strong> ' + usuarioActual.email);
        $('.contacto p:nth-child(2)').html('<strong>País:</strong> ' + usuarioActual.pais);
        console.log(usuarioActual.pais)
    } else {
        // Redirigir al usuario a la página de inicio de sesión si no hay datos de usuario almacenados
        window.location.href = './Inicio.html';
    }
});