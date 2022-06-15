//llamar el moduloexpress//
const express= require ('express');

const app= express();

//confuguracin de pug//
 app.set('views', './vistas');
 app.set('view engine', 'pug');

 //ruta por defecto//
app.get('/', function(req, res){
    res.render('index');
})
app.listen('3000', function () {
    console.log('aplicacion iniciada  3000');
});