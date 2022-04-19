"use strict"
class Vuelos {
    constructor (origen, destino, precio) {
        this.origen = origen ;
        this.destino = destino;
        this.precio = precio;
        this.horaInicio = horaInicio;
        this.horaFinal = horaFinal;
    }
}

let vuelo = [{
    "origen": "Bogota",
    "destino": "Barranquilla",
    "precio": 800000,
    "horaInicio": "4:00AM",
    "horaFinal": "10:00PM",
},
{
    "origen": "Bogota",
    "destino": "Cauca",
    "precio": 780000,
    "horaInicio": "6:00AM",
    "horaFinal": "10:00AM",
}];

function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio, vuelo[i].horaInicio, vuelo[i].horaFinal);
}
}

function cargarVuelos(origen,destino, precio){
  let contentVuelo = document.createElement("div");
  let contentPrincipal = document.getElementById("main_content");
  contentPrincipal.appendChild(contentVuelo);
  contentVuelo.setAttribute("class", "style-contentVuelo");

  let contentOrigen = document.createElement("div");
  contentVuelo.appendChild(contentOrigen);

  let origenVuelo = document.createElement("label");
  contentVuelo.appendChild(origenVuelo);
  let textOrigen = document.createTextNode(origen);
  origenVuelo.appendChild(textOrigen);
  origenVuelo.setAttribute("class", "styleOrigen");

  let destinoVuelo = document.createElement("label");
  contentVuelo.appendChild(destinoVuelo);
  let textDestino = document.createTextNode(destino);
  destinoVuelo.appendChild(textDestino);
  destinoVuelo.setAttribute("class", "styleDestino");

  let precioVuelo = document.createElement("label");
  contentVuelo.appendChild(precioVuelo);
  let textPrecio = document.createTextNode(precio);
  precioVuelo.appendChild(textPrecio);
  precioVuelo.setAttribute("class", "stylePrecio");

  let directVuelo = document.createElement("label");
  contentVuelo.appendChild(directVuelo);
  let textDirect = document.createTextNode("Directo");
  directVuelo.appendChild(textDirect);
  directVuelo.setAttribute("class", "styleDirecto");

  let horaInicioVuelo = document.createElement("label");
  contentVuelo.appendChild(horaInicioVuelo);
  let textHoraInicio = document.createTextNode("10:00AM");
  horaInicioVuelo.appendChild(textHoraInicio);
  horaInicioVuelo.setAttribute("class", "styleHoraInicio");

  let horaFinalVuelo = document.createElement("label");
  contentVuelo.appendChild(horaFinalVuelo);
  let textHoraFinal = document.createTextNode("4:00PM");
  horaFinalVuelo.appendChild(textHoraFinal);
  horaFinalVuelo.setAttribute("class", "styleHoraFinal");
}