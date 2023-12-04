$(document).ready(function () {
    cargarComentarios();

    $('#publicarBtn').on('click', function () {
        agregarComentario();
    });
});

function obtenerNombrePeliculaActual() {
    return $('#nombre').text(); // Cambia esto con tu lógica real
}

function agregarComentario() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    var nombreUsuario = usuarioActual.nombre;
    var comentario = $('#formId1').val();
    var puntuacion = $('#puntuacion').val();

    if (nombreUsuario && comentario.trim() !== '' && puntuacion !== 'Select one') {
        var nuevoComentario = {
            nombreP: obtenerNombrePeliculaActual(),
            nombre: nombreUsuario,
            comentario: comentario,
            puntuacion: puntuacion
        };

        var comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
        comentariosGuardados.push(nuevoComentario);

        localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

        // Limpiar la tabla antes de cargar los comentarios
        $('#comentarioTabla tbody').empty();

        cargarComentarios();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function cargarComentarios() {
    var comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    var nombrePeliculaActual = obtenerNombrePeliculaActual();
    var comentariosPelicula = comentariosGuardados.filter(function (comentario) {
        return comentario.nombreP == nombrePeliculaActual;
    });

    var tablaComentario = $('#comentarioTabla tbody');
    tablaComentario.empty(); // Limpiar la tabla antes de cargar los comentarios

    comentariosPelicula.forEach(function (comentario) {
        var fila = `<tr><td>${comentario.nombre}</td><td>${comentario.comentario}</td><td>`;
        
        for (var i = 0; i < comentario.puntuacion; i++) {
            fila += `<img src="./Assets/Images/palomitas-de-maiz.png" alt="">`;
        }

        fila += `</td></tr>`;

        tablaComentario.append(fila);
    });
}
