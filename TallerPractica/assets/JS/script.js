$(function () {
  var promedio;
  $(document).ready(function () {
    $("#insertar").click(function () {
      var id = $("#id").val();
      var asig = $("#asig").val();
      var tipoEst = $("#est").val();
      var sum = Number($("#not1").val());
      sum += Number($("#not2").val());
      sum += Number($("#not3").val());
      //alert(tipoEst)

      $("table tbody").append(
        "<tr> <td> <img src='" +
        tipoEst +
        "'>" +
        "</td> <td>" +
        id +
        "</td> <td>" +
        asig +
        "</td>" +
        "<td>" +
        (sum / 3) +
        "</td></tr>"
      );
    });

    $("#promedio").click(function () {
      var campo3 = 0;
      var contador = 0;

      $("#tabla tbody tr").each(function () {
        var valorCelda = $(this).find("td:eq(3)").text().trim();
        var numero = parseFloat(valorCelda);

        if (!isNaN(numero)) {
          campo3 += numero;
          contador++;
        }
      });

      if (contador > 0) {
        promedio = campo3 / contador;
        $("#resultadoPromedio").text("Promedio: " + promedio.toFixed(2));
      } else {
        $("#resultadoPromedio").text("No hay datos numéricos en la columna.");
      }
    });

    $("#resaltar").click(function () {
      
      if (promedio != 0) {

        $("#tabla tr").each(function () {
          console.log(parseFloat($(this).find('td').eq(3).text()));
          if (parseFloat($(this).find('td').eq(3).text()) >= promedio) {
            $(this).find('td').css("background-color", "red");
          }
        });
      }
    })
  });
});
