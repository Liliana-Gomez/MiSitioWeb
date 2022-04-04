class Motocicleta {
    constructor (marca, modelo, precio, imagen) {
        this.Marca = marca ;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}
let moto = new Motocicleta ("Honda", "CB", "$ 15000000", "img/honda.png");

function validarHonda () {
    alert(moto.Marca + "" + moto.Modelo + ""  + " la motocicleta que necesitas!!");
    
    mostrarHonda();
}
function mostrarHonda() {
    let contentPrincipal = document.getElementById("main_content");
    let contentMoto      = document.createElement("div");
    contentPrincipal.appendChild(contentMoto);

    let marcaMoto = document.createElement("label");
    contentMoto.appendChild(marcaMoto);
    let textMarca = document.createTextNode(moto.Marca);
    marcaMoto.appendChild(textMarca);

    let modeloMoto =  document.createElement("label");
    contentMoto.appendChild(modeloMoto);
    let textModelo  =  document.createTextNode(moto.Modelo);
    modeloMoto.appendChild(textModelo);

    let precioMoto = document.createElement("label");
    contentMoto.appendChild(precioMoto);
    let textMoto = document.createTextNode(moto.Precio);
    precioMoto.appendChild(textMoto);

    let imagenMoto  = document.createElement("img");
    contentMoto.appendChild(imagenMoto);
    imagenMoto.setAttribute("src", moto.Imagen);
}

let bajaj = new Motocicleta ("Bajaj", "Pulsar", "$ 19.800.000", "img/pulsar-ns.png");

function validarBajaj () {
    alert (bajaj.Marca + " " + bajaj.Modelo + " " + "La motocicleta perfecto para salir de paseo con tu familia o amigos¡¡")

    mostrarBajaj ();
}

function mostrarBajaj () {
    let contenedorPrinBajaj = document.getElementById("main_content");
    let contentBajaj       = document.createElement("div");
    contenedorPrinBajaj.appendChild(contentBajaj);

    let marcaBajaj = document.createElement("label");
    contentBajaj.appendChild(marcaBajaj);
    let textBajajMarca = document.createTextNode(bajaj.Marca);
    marcaBajaj.appendChild(textBajajMarca);

    let modeloBajaj = document.createElement("label");
    contentBajaj.appendChild(modeloBajaj);
    let textModelBajaj= document.createTextNode(bajaj.Modelo);
    modeloBajaj.appendChild(textModelBajaj);

    let precioBajaj = document.createElement("label");
    contentBajaj.appendChild(precioBajaj);
    let textBajaj= document.createTextNode(bajaj.Precio);
    precioBajaj.appendChild(textBajaj);

    let imgBajaj = document.createElement("img");
    contentBajaj.appendChild(imgBajaj);
    imgBajaj.setAttribute("src", bajaj.Imagen)
}
 let AKT = new Motocicleta ("AKT", "TT", "$ 24000000", "img/tt-akt.jpg");
 function validarAKT() {
     alert (AKT.Marca + " " + AKT.Modelo + " " + "La moto mas eficaz en la carretera¡¡")

     mostarAKT();
 }

function mostarAKT () {
    let contenedorPrincAKT = document.getElementById("main_content");
    let contnedorAKT = document.createElement("div");
    contenedorPrincAKT.appendChild(contnedorAKT);

    let marcaAKT = document.createElement("label");
    contnedorAKT.appendChild(marcaAKT);
    let textMarcaAKT = document.createTextNode(AKT.Marca);
    marcaAKT.appendChild(textMarcaAKT);

    let modeloAKT = document.createElement("label");
    contnedorAKT.appendChild(modeloAKT);
    let textModeloAKT = document.createTextNode(AKT.Modelo);
    marcaAKT.appendChild(textModeloAKT);

    let precioAKT = document.createElement("label");
    contnedorAKT.appendChild(precioAKT);
    let textPrecioAKT = document.createTextNode(AKT.Precio);
    precioAKT.appendChild(textPrecioAKT);

    let imgAKT = document.createElement("img");
    contnedorAKT.appendChild(imgAKT);
    imgAKT.setAttribute("src", AKT.Imagen)
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Motocicletas Disponibles" ) {
            mostrarHonda(Honda);
            mostrarBajaj(bajaj);
            mostarAKT(AKT);
        }
        else if (busqueda == "Honda" ) {
            mostrarHonda(moto);}
        

        if (busqueda == "Bajaj") {
            mostrarBajaj(bajaj);}

        else if (busqueda == "AKT") {
            mostarAKT(AKT);
        }
            
        else {
              this.true;
        } 
        return this. false.alert("no se han encontrado resultados."); 
    }
})


function limpiarVentana () {
    document.getElementById("main_content").innerHTML = "" ;
}