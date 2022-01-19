const http = require("http"); //lo que hago aca es traerme una libreria interna de node p/crearme un http

function sitioweb(req, res) //crea un servidor, req es cuando requeris y res el resultado lo que me envia el navegador desp de q la pag web arranca
{
    res.writeHead(200, {"Content-type": "text/html" }); //textoplain(es plano) sino html(me figura el strong) el 200 es q todo esta bien como el error 404
    res.end("<strong>Hello from the other side, i just made this Server for testing </strong>");
}

let servidor = http.createServer(sitioweb); //la funcion que se ejecuta es la de sitioweb

servidor.listen(6969, "127.0.0.1") //el6969 es el puerto generalmente es el 80 si tenes poder de admn
                                   //el 127 es el ip o local host. (no es mio personal..no me dejo hackear tan easy jaja)
console.log ("Servidor corriendo en el puerto 6969");

//si estas leyendo esto, con ctrl-c en windows cmd, te permite reiniciar el server para modificar algo en tu editor, y recargar para actualizarlo


 