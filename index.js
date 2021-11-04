//1. importando comudlo http
import http from 'http';

//2. crear servidor
//cb (callBAck) es una funcion que se ejecuta ante cualquier peticion de nuestro Server
//(request, response)

//las tres formas de declarar una funcion
//Arrow function, funsio declaretion
const server = http.createServer((req, res)=>{
    console.log("se ha recibido una peticion")
    //repuesta
    res.write("wiiii");
    //terminamos la conexion
    res.end();
});
//3. poniendo a trabajar el servidor (puerto +3000, ip)
server.listen(3000, '192.168.1.64',()=> { 
    console.log("Servidor Escuchando en http://192.168.1.64:300")
});
console.log("Holaaaaa Node");