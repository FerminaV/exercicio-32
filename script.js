document.addEventListener("DOMContentLoaded", function () {
  let reverso1 = document.querySelector("#reverso1");
  let anverso1 = document.querySelector("#anverso1");

  let botonTarxeta1 = document.querySelector("#botonTarxeta1");
  let botonVolver1 = document.querySelector("#botonVolver1");
  let botonTarxeta2 = document.querySelector("#botonTarxeta2");
  let botonVolver2 = document.querySelector("#botonVolver2");
  let botonTarxeta3 = document.querySelector("#botonTarxeta3");
  let botonVolver3 = document.querySelector("#botonVolver3");

  botonTarxeta1.addEventListener("click", amosar1);
  botonVolver1.addEventListener("click", volver1);
  botonTarxeta2.addEventListener("click", amosar2);
  botonVolver2.addEventListener("click", volver2);
  botonTarxeta3.addEventListener("click", amosar3);
  botonVolver3.addEventListener("click", volver3);

  function amosar1(){
    anverso1.style.display = "block";
    reverso1.style.display = "none";
  }
  function volver1(){
    reverso1.style.display = "block";
    anverso1.style.display = "none";
    window.alert("E ainda é luns...");
  }

  function amosar2(){
    anverso2.style.display = "block";
    reverso2.style.display = "none";
  }
  function volver2(){
    reverso2.style.display = "block";
    anverso2.style.display = "none";
    window.alert("Creo que xa o teño :)");
  }
  function amosar3(){
    anverso3.style.display = "block";
    reverso3.style.display = "none";
  }

  function volver3(){
    reverso3.style.display = "block";
    anverso3.style.display = "none";
    window.alert("SON UN CRACK!!!!");
  }
});
