"user strict"
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
    let text = document.createTextNode("Hola, soy Daniel, tu agente virtual de compra y servicio al cliente.");
    desc.appendChild(text);
    desc.setAttribute("class", "styleDesc");

    // let div3 = document.createElement("div")
    // let contenedor2 = document.getElementById("div2");
    // contenedor.appendChild(div2);
    // contenedor.setAttribute("class", "div2");

    // let descr = document.createElement("label");
    // div2.appendChild(descr);
    // let text1 = document.createTextNode("Hola, soy Daniel, tu agente virtual de compra y servicio al cliente.");
    // descr.appendChild(text);
    // descr.setAttribute("class", "styleDescr")

    // let descr1 = document.createElement("label");
    // div2.appendChild(descr1);
    // let text2 = document.createTextNode("Hola, soy Daniel, tu agente virtual de compra y servicio al cliente.");
    // descr.appendChild(text2);
    // descr.setAttribute("class", "styleDescri")

    
    
    

}
function ocultarForm(){
    div4.classList.remove("transform5");
    div4.classList.add("transform4");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar");

    

    // mostrarRaya();
}
// function mostrarRaya() {
//     let div2 = document.createElement("div")
//     let contenedor = document.getElementById("div2")
//     contenedor.appendChild(div2)
//     contenedor.setAttribute("class", "div2")
// }

