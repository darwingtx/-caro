$(document).ready(function () {
    $('#button').click(function () {



        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var usuario = $('#user').val();
        var email = $('#E-mail').val();
        var pais = $('#pais').val();


        var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || {};


        usuarioActual.nombre = nombre;
        usuarioActual.apellido = apellido;
        usuarioActual.usuario = usuario;
        usuarioActual.email = email;
        usuarioActual.pais = pais;


        localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));


        alert('Perfil actualizado con éxito');
        window.location.href = 'Perfil1.html';
    });
});