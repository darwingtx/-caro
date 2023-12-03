$(document).ready(function () {
    function iniciarSesion() {
        // Obtener los valores de los campos
        var usuario = $('#usuario').val();
        var email = $('#E-mail').val();

        // Validar que al menos uno de los campos esté lleno
        if (usuario === '' && email === '') {
            alert('Ingrese el nombre de usuario o el correo electrónico.');
            return false;
        }

        // Obtener los datos almacenados en localStorage
        var usuarioData = JSON.parse(localStorage.getItem('usuarioData'));

        // Validar si los datos coinciden con lo almacenado
        if (usuarioData && ((usuarioData.usuario === usuario && usuario !== '') || (usuarioData.email === email && email !== ''))) {
            // Almacenar la información del usuario en localStorage
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioData));

            alert('Inicio de sesión exitoso. ¡Bienvenido de nuevo!');
            
            // Redirigir al usuario al "home"
            window.location.href = './index.html';
            
            return true;
        } else {
            alert('Nombre de usuario o correo electrónico incorrectos.');
            return false;
        }
    }

    $('.cr').on('click', function (e) {
        e.preventDefault();
        iniciarSesion();
    });
});