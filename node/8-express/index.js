const express= require ('express');

const server= express ();
server.use(express.json());

server.listen('3000', () => {
    console.log('server on port 3000');
});

server.get('/', function(req, res){
    res.send('<h1>Este es mi primer hola mundo usando uso</h1>');
    res.end();
});

server.get('/mision', function(req, res) {
    res.send('<h1>Mi sitio</h1> <p>nuestra mejor es la mejor vision</p>');
});


server.post('/sobrenosotros', function(req, res){
    res.send('<h2>sobre nosotros. conoscanos </h2>');
})


server.put('/contactanos', function(req, res){
    res.send('<h2>sobre nosotros. contactenos </h2>');
});

server.delete('/cerrarSesion', function(req, res){
    res.send('<h2>sobre nosotros. siempre cerrar sesion  </h2>');
});

//json
server.get('/json', function(req, res){
    res.json({
        name:"Liliana",
        LastName: "Anacona"
    });
});