//1. importando comudlo http
import http from 'http';

//2. crear servidor
//cb (callBAck) es una funcion que se ejecuta ante cualquier peticion de nuestro Server
//(request, response)

//las tres formas de declarar una funcion
//Arrow function, funsio declaretion
const server = http.createServer((req, res)=>{
    console.log("se ha recibido una peticion")
    //consola
    console.log(`URL:  ${req.url}`);
    console.log(`Rques Method: ${req.method}`)
    //tipo de contenido
    res.setHeader("Content-type", "text/html")
    //repuesta
    res.write("<html>");
    res.write("<head><title>My App</title></head>");
    res.write(`<Body><h1>Mi sitio web 1</h1><br><p>Recurso Solucitdado: ${req.url}</p> </Body>`);
    res.write("</html>");
    //terminamos la conexion
    res.end();
});
//3. poniendo a trabajar el servidor (puerto +3000, ip)
server.listen(3000, '192.168.1.64',()=> { 
    console.log("Servidor Escuchando en http://192.168.1.64:300")
});
console.log("Holaaaaa Node");