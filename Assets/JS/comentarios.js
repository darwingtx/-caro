$(document).ready(function () {
    cargarComentarios();

    $('#publicarBtn').on('click', function () {
        agregarComentario();
    });
});

function agregarComentario() {
    var usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    var nombreUsuario = usuarioActual.nombre;
    var comentario = $('#formId1').val();
    var puntuacion = $('#puntuacion').val();

    if (nombreUsuario && comentario.trim() !== '' && puntuacion !== 'Select one') {
        var nuevoComentario = {
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
    var tablaComentario = $('#comentarioTabla tbody');

    comentariosGuardados.forEach(function (comentario) {
        // Crear una fila para el comentario
        var fila = `<tr><td>${comentario.nombre}</td><td>${comentario.comentario}</td><td>`;
        
        // Agregar imágenes de palomitas según la puntuación
        for (var i = 0; i < comentario.puntuacion; i++) {
            fila += `<img src="./Assets/Images/palomitas-de-maiz.png" alt="">`;
        }

        fila += `</td></tr>`;

        // Agregar la fila a la tabla
        tablaComentario.append(fila);
    });
}