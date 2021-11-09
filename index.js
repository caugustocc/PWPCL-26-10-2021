//1. importando modulo http
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
    //ruta por defecto
    if(url==='/'){
        //retorno tipo HTML
        res.setHeader("Content-type", "text/html");
        //respuesta
        res.write(`<html>`);
        res.write(`<head><title>My App</title></head>`);
        res.write(`<Body><h1>Mi sitio web 1</h1><br><p>Recurso Solicitdado: ${req.url}</p> </Body>`);
        res.write(`</html>`);
        res.end();
    }
    //ruta de /autor
    else if(url === "/autor"){
//s24 enrutando dos recursos
res.setHeader("Content-type", "text/html");
//respuesta
res.write(`<html>`);
res.write(`<head><title>Autor</title></head>`);
res.write(`<Body><h1>Carlos Augusto Cruz Cruz</h1><br><p>Recurso Solicitdado: ${req.url}`)
res.write(`</p><br><img  src="https://avatars.githubusercontent.com/u/92931689?s=400&u=ca25d563312b96bb0597dac5977b81e22fc979f3&v=4" width="250px"> </Body>`);
res.write(`</html>`);
res.end();
    }
    //ruta /tec informacion de la carrera
    else if(url === "/tec"){
        //s24 enrutando dos recursos
        res.setHeader("Content-type", "text/html");
        //respuesta
        res.write(`<html>`);
        res.write(`<head><title>ITGAM</title></head>`);
        res.write(`<Body><h1>Instituto Tecnologico Gustavo A. Madero</h1><br><p>Recurso Solicitdado: ${req.url}</p><br><img width="250px" src="https://yosoy.dev/wp-content/uploads/2018/04/itgam.jpg"></Body>`);
        res.write(`</html>`);
        res.end();
    }
    else{
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
//a espera de peticiones
server.listen(3000, '192.168.1.105',()=> { 
    console.log(`Servidor Escuchando en http://192.168.1.105`)
});
console.log("Enrutamiento de peticiones");