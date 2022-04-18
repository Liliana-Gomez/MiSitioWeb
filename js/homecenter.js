let botonForm = document.getElementById("botonForm");
let div4 = document.getElementById("div4");

let botonCerrar = document.getElementById("botonCerrar");

botonForm.addEventListener("click", mostrarForm);
botonCerrar.addEventListener("click", ocultarForm);

function mostrarForm(){
  div4.classList.add("transform5");
  div4.classList.remove("transform4");
  botonCerrar.classList.add("botonCerrarVisible");
  botonCerrar.classList.remove("botonCerrar");
}

function ocultarForm(){
div4.classList.remove("transform5");
div4.classList.add("transform4");
botonCerrar.classList.remove("botonCerrarVisible");
botonCerrar.classList.add("botonCerrar");
}