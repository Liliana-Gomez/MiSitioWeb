/*"user strict"
let botonForm = document.getElementById("botonForm");
let div4 = document.getElementById("div4");



let botonCerrar = document.getElementById("botonCerrar");

botonForm.addEventListener("click",mostrarform);

botonCerrar.addEventListener("click",ocultarForm );

function mostrarform() {
    div4.classList.add("transform5");
    div4.classList.remove("transform4");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");

    let div2 = document.createElement("div")
    let contenedor = document.getElementById("div2");
    contenedor.appendChild(div2);
    contenedor.setAttribute("class", "div2");
    let desc = document.createElement("label");
    div2.appendChild(desc);
    let text = document.createTextNode("Hola, soy ana, tu agente virtual de compra y servicio al cliente.");
    desc.appendChild(text);
    desc.setAttribute("class", "styleDesc");

}
function ocultarForm(){
    div4.classList.remove("transform5");
    div4.classList.add("transform4");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar"); 

}

*/

"use strict"

let botonOpen = document.getElementById("chat-box-disable");
let botonCerrar = document.getElementById("botonCerrar");
let botonOpenHeader = document.getElementById("header-movil-open");
let botonCerrarHeader = document.getElementById("boton-cerrar-header");
let Header = document.getElementById("header");

botonOpen.addEventListener("click", dezplegarCaja);
botonCerrar.addEventListener("click", cerrarCaja);

function dezplegarCaja(){

    botonOpen.classList.add("chat-box-disable-in");
    botonOpen.classList.remove("chat-box-disable-out");
    document.getElementById("chat-box").classList.add("chat-box-in");
    document.getElementById("chat-box").classList.remove("chat-box-out");

}

function cerrarCaja(){
    
    botonOpen.classList.remove("chat-box-disable-in");
    botonOpen.classList.add("chat-box-disable-out");
    document.getElementById("chat-box").classList.remove("chat-box-in");
    document.getElementById("chat-box").classList.add("chat-box-out");
};

botonOpenHeader.addEventListener("click", dezplegarCajaHeader);
botonCerrarHeader.addEventListener("click", cerrarCajaHeader);

function dezplegarCajaHeader(){

    document.getElementById("header-movil").classList.add("contenedor-barra-busqueda-movil");

    document.getElementById("header-movil").classList.remove("contenedor-barra-busqueda-movil-out");

    document.getElementById("header").style.display="none";
}

function cerrarCajaHeader(){
    document.getElementById("header-movil").classList.remove("contenedor-barra-busqueda-movil");

    document.getElementById("header-movil").classList.add("contenedor-barra-busqueda-movil-out");

    document.getElementById("header").style.display="flex";
}