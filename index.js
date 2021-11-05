//1. importando comudlo http
import http from 'http';

//2. crear servidor
//cb (callBAck) es una funcion que se ejecuta ante cualquier peticion de nuestro Server
//(request, response)

//las tres formas de declarar una funcion
//Arrow function, funsio declaretion
const server = http.createServer((req, res)=>{
    let {url, method} = req;
    console.log(`Se ha solicitado el siguiente recurso: ${method} : ${req}`)
    //filtrar url
    if(url==='/'){
        //retorno tipo HTML
        res.setHeader("Content-type", "text/html");
        //respuesta
        res.write(`<html>`);
        res.write(`<head><title>My App</title></head>`);
        res.write(`<Body><h1>Mi sitio web 1</h1><br><p>Recurso Solucitdado: ${req.url}</p> </Body>`);
        res.write(`</html>`);
        res.end();
    }else{
        res.setHeader("Content-type", "text/html");
        //respuesta
        res.write(`<html>`);
        res.write(`<head><title>My App</title></head>`);
        res.write(`<Body><h1>Recurso no encontrado</h1></Body>`);
        res.write(`</html>`);
        res.end();
    }
        
});
//3. poniendo a trabajar el servidor (puerto +3000, ip)
server.listen(3000, '192.168.1.64',()=> { 
    console.log("Servidor Escuchando en http://192.168.1.64:300")
});
console.log("Holaaaaa Node");