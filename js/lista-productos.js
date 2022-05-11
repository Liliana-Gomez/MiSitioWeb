let nodoTabla = undefined;

function crearEncabezado() {
    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById ("table.js");
    contenedor.appendChild(nodoTabla);

    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading1 = document.createTextNode("codigo");
    nodoEncabezado1.appendChild(codigoHeading1)

    let nodoEncabezado2 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descripHeading1 = document.createTextNode("descripcion");
    nodoEncabezado2.appendChild(descripHeading1)

    let nodoEncabezado3 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorHeading1 = document.createTextNode("valor unitario");
    nodoEncabezado3.appendChild(valorHeading1)

    let nodoEncabezado4 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let cantidadHeading1 = document.createTextNode("Unidades en stock");
    nodoEncabezado4.appendChild(cantidadHeading1)

    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id" , "table-stock");

    // limpiarFormulario();
    
}
// function limpiarFormulario() {
//     document.getElementById("codigo").value = "";
//     document.getElementById("descripcion").value="";
//     document.getElementById("valor").value="";
//     document.getElementById("unidadesStock").focus();

// }
function validarTabla() {
    if (!document.getElementById("table-stock")) {
        crearEncabezado();
        
    }
    else {
        alert("ya esta")
    }

}
function cargarProducto() {
    if (validarFormulario()){

    validarTabla();

    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    let inputValor = document.getElementById("valor").value;
    let inputValorNodo = document.createTextNode(inputValor);

    let inputUnidad = document.getElementById("unidadesStock").value;
    let inputUnidadNodo = document.createTextNode(inputUnidad);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo, inputValorNodo,inputUnidadNodo);

  }
}
function cargarInfoTabla(codigo, descripcion,valor, unidad) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto)

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(descripcion);

    let nodoValTD = document.createElement("td");
    nodoProducto.appendChild(nodoValTD);
    nodoValTD.appendChild(valor);

    let nodoUnidadTD = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadTD);
    nodoUnidadTD.appendChild(unidad);

    limpiarFormulario();

}
function limpiarFormulario() {
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value="";
    document.getElementById("valor").value="";
    document.getElementById("unidadesStock").value="";
}

function validarFormulario(){
    let inputCodigo = document.getElementById("codigo").value.trim();
    if(inputCodigo ==""){
    alert("por favor ingrese el codigo del producto").focus();



    


    // return false;


}

//   return true; 
let inputDescripcion = document.getElementById("descripcion").value.trim();
if(inputDescripcion ==""){
alert("por favor ingrese LA descripcion del producto").focus();


} 
let inputValor = document.getElementById("valor").value.trim();
if(inputValor ==""){
alert("por favor ingrese el valor del producto").focus();
}

let inputUnidadesStock = document.getElementById("unidadesStock").value.trim();
if(inputUnidadesStock ==""){
alert("por favor ingrese   las unidades del producto").focus();
return false;
}
  return true; 
}