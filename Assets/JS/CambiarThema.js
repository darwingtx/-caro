$(document).ready(function () {
    
    var temaActual = localStorage.getItem("tema");
  
    if (temaActual) {
      $("body").attr("data-bs-theme", temaActual);
    }

    $("#oscuro").click(function () {
        $("body").attr("data-bs-theme", "dark");
        localStorage.setItem("tema", "dark");
    });

    $("#claro").click(function () {
        $("body").attr("data-bs-theme", "light");
        localStorage.setItem("tema", "light");
    });
  });
  