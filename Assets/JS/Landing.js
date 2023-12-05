
$(document).ready(function () {
    $(".Quitar").toggle();
  });
  let ImagenActual = 0;
  function Carru(index) {
    const ContenidoCatalogo = document.querySelector('.ContenidoCatalogo');
    const Tamaño = document.querySelector('.ImagenesCatalogo').offsetWidth;
    ImagenActual = index;
  
    const transformValue = -index * Tamaño  ;
    ContenidoCatalogo.style.transform = `translateX(${transformValue}px)`;
  }
  
  function Siguiente() {
    ImagenActual = (ImagenActual + 1) % 9;
    Carru(ImagenActual);
  }
  function Anterior() {
    ImagenActual = (ImagenActual - 1 + 9) % 9;
    Carru(ImagenActual);
  }
  setInterval(Siguiente, 3000);
  
  //Funcionamiento Carrito Comentarios
  let currentSlide = 0;
  function MostrarSeleccionado(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    currentSlide = index;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    MostrarSeleccionado(currentSlide);
  }
  setInterval(nextSlide, 10000);
  
  
          //Agregar Comentario
          $("#BtnAgregar").click(function() {
            var Correo = $("#Correo").val();
            var Nombre = $("#Nombre").val();
            var Mensaje = $("#Msg").val();
    
            if (Correo && Nombre && Mensaje) {
                $('#Cm2').hide();
                $('#Cm3').show();
                
                var Com =$('<div id="Cm3">');
                Com.append($('<h6 class="Agregado">').text("Tu Comentario: " +Nombre).val(Nombre));
                Com.append($('<p class="Agregado">').text(Mensaje).val(Mensaje));
                Com.append($('<button class="btn btn-danger AgregadoB" id="Eliminar">Eliminar comentario</button>').
                css("text-align", "center").val("Boton"));
        
                $(".slides #Cm1").append(Com);
    
                $("#Correo").val("");
                $("#Nombre").val("");
                $("#Msg").val("");
    
            } else {
                alert("Por favor, complete todos los campos.");
            }
        });
        $(".slides").on("click", "#Eliminar", function() {
            $(this).closest("#Cm3").remove();
            $('#Cm2').show();
        });
        $('#AgregarC').click(Mostrar)
        function Mostrar(){
          $(".sc").toggle();
        }
        $('#Salir').click(Ocultar)
        function Ocultar(){
          $(".sc").toggle();
        }
  
  
        function AgregarPelicula() {
          if(localStorage.getItem('GuardarPelocula') === null){
            $(".Quitar").toggle();
            $(".Agregar").toggle();
            $(".Quitar").addClass("Uno");
              var boton = $(this);
              var divPadre = boton.closest('div');
              var PeloculaDiv = divPadre.html();
              var Cantidad = 1;
              localStorage.setItem('Cantidad', Cantidad);
              localStorage.setItem('GuardarPelocula', PeloculaDiv);
              $(".Agregar").toggle();
              $(".Quitar").toggle();
              $(".Quitar").removeClass("Uno");
              alert('¡Se agrego la pelicula a tu Watch List, Actualmente tienes: 1!');
          }else{
              if(localStorage.getItem('GuardarPelocula1') === null){
                $(".Quitar").toggle();
                $(".Agregar").toggle();
                $(".Quitar").addClass("Dos");
                  var boton = $(this);
                  var divPadre = boton.closest('div');
                  var PeloculaDiv1 = divPadre.html();
                  var Cantidad = 2;
                  localStorage.setItem('Cantidad', Cantidad);
                  localStorage.setItem('GuardarPelocula1', PeloculaDiv1);
                  $(".Quitar").toggle();
                  $(".Agregar").toggle();
                  $(".Quitar").removeClass("Dos");
                  alert('¡Se agrego la pelicula a tu Watch List, Actualmente tienes: 2!');
              }else{
                if(localStorage.getItem('GuardarPelocula2') === null){
                  $(".Quitar").toggle();
                  $(".Agregar").toggle();
                  $(".Quitar").addClass("Tres");
                    var boton = $(this);
                    var divPadre = boton.closest('div');
                    var PeloculaDiv2 = divPadre.html();
                    var Cantidad = 3;
                    localStorage.setItem('Cantidad', Cantidad);
                    localStorage.setItem('GuardarPelocula2', PeloculaDiv2);
                    $(".Quitar").toggle();
                    $(".Agregar").toggle();
                    $(".Quitar").removeClass("Tres");
                    alert('¡Se agrego la pelicula a tu Watch List, Actualmente tienes: 3!');
                }else{
                  alert("!! Solo puede tener tres peliculas en tu Watch List !!")
                }
              }   
          }
        }
        $('.Agregar').click(AgregarPelicula);