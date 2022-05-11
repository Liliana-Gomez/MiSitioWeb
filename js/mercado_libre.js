"Use strict"

class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.Marca = marca ;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Yamaha ", "400RL ", "$ 10.0000.000", "img/yamaha.png");

let fordMustang = new Automovil ("Suzuki ", "Clásico ", "$13.800.000", "img/suzuki.png");

let chevrolet = new Automovil ("Pulsar-ns ", "Bajaj ", "$10.000.000", "img/pulsar-ns.png");

function mostrarAuto() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenMoto");
    
    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")





    contentPrincipal = document.getElementById("mainContent");
    contentAuto  = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenMoto");

    imagenAuto = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", fordMustang.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    textMarca = document.createTextNode(fordMustang.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(fordMustang.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    textAuto = document.createTextNode(fordMustang.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")



 


  
    contentPrincipal = document.getElementById("mainContent");
    contentAuto  = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenMoto");

    imagenAuto = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    textMarca = document.createTextNode(chevrolet.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(chevrolet.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    textAuto = document.createTextNode(chevrolet.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Motocicletas" ) {
            mostrarAuto(auto, fordMustang, chevrolet);
        }
            
        else {
              alert("Al parecer, no hay coincidencias para su busqueda."); 
    }
}
})


function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}