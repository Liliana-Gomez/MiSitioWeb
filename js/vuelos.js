class Vuelos {
    constructor (origen, destino, precio,) {
        this.Origen = origen ;
        this.Destino = destino;
        this.Precio = precio;
    }
}
let vuelo = [{
    "origen" : "BGT",
    "destino" : "CTG",
    "precio" : 30000,
},
  {
    "origen" : "BGT",
    "destino" : "CTG",
    "precio" : 50000,
}];

function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
        cargarVuelos(vuelo[i].origen,  vuelo[i].destino, vuelo[i].precio);
    }
}
  /* for(let i = 0; i < vuelo.lengt; i++) {
      cargarVuelos(vuelo[i].origen,  vuelo[i].destino, precio)
  } */
function cargarVuelos (origen,destino,precio) {
    let contentVuelo = document.createElement("div");
    let contentPrincipal = document.getElementById("main_content");
    contentPrincipal.appendChild(contentVuelo);
    contentVuelo.setAttribute("class","style-contentVuelo")

    let contentOrigen = document.createElement("div");
     contentVuelo.appendChild(contentOrigen);

     let origenVuelo = document.createElement("label");
    contentVuelo.appendChild(origenVuelo);
    let textOrigen = document.createTextNode(origen);
    origenVuelo.appendChild(textOrigen);
    origenVuelo.setAttribute ("class","styleOrigen")

    let destinoVuelo = document.createElement("label");
    contentVuelo.appendChild(destinoVuelo);
    let textDestino = document.createTextNode(destino);
    destinoVuelo.appendChild(textDestino);

    let precioVuelo = document.createElement("label");
    contentVuelo.appendChild(precioVuelo);
    let textPrecio = document.createTextNode(precio);
    precioVuelo.appendChild(textPrecio);
}