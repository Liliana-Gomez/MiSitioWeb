"use strict"
/* ejercicio1*/
console.log("Hola Mundo");
/* ejercicio2*/
let nombre = "Bienvenida"
if (nombre){
    console.log("sr.Liliana " + nombre)
}
/* ejerciccio3*/
let costoproducto = 22000;
let impuestos = 0.10;
let domicilio = 2000;
 
let subtotal = costoproducto +  (costoproducto*impuestos);
let costoTotal = subtotal + domicilio;

console.log ("El costo inicial del producto es: "+costoproducto);
console.log ("el subtotal del producto es:"+subtotal);
console.log ( "su total es:"+costoTotal);

 /* ejercicio4*/
 let costoinicial = 100000;
 let descuento1 =0.05;
 let descuento2 = .10

 console.log ("su valor inicial es:" + costoinicial)

 if (costoinicial < 30000)
 console.log ("no tendra ningun descuento")

 if (costoinicial >= 30000 & costoinicial < 100000);{
descuento1 = costoinicial - (costoinicial * descuento1)
 console.log ("tendra un descuento del 5% :" + descuento1)}

if (costoinicial >= 100000);{
descuento2 = costoinicial - (costoinicial*descuento2)
console.log ("tendra un descuento del 10% :"+ descuento2)}
