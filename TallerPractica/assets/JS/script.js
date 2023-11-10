$(function () {
    $(document).ready(function () {

        $("#insertar").click(function () {
            var id = $("#id").val();
            var asig = $("#asig").val();
            var tipoEst = $("#est").val();
            var sum = Number($("#not1").val());
            sum += Number($("#not2").val());
            sum += Number($("#not3").val());
            //alert(tipoEst)

             $("table tbody").append("<tr> <td> <img src='" + tipoEst 
            + "'>" + "</td> <td>" + id + "</td> <td>" + asig + "</td>" + "<td>" 
            + sum / 3 + "</td></tr>"); 


           

        });

    });
});