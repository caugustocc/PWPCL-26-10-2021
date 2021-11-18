//1. importando modulo http
import http from "http";
import Fs from "fs";

//2. crear servidor
//cb (callBAck) es una funcion que se ejecuta ante cualquier peticion de nuestro Server
//(request, response)

//las tres formas de declarar una funcion
//Arrow function, funsio declaretion
const server = http.createServer((req, res) => {
  let { url, method } = req;
  console.log(`Se ha solicitado el siguiente recurso: ${method} : ${url}`);
  //filtrar url
  //ruta por defecto
  if (url === "/") {
    //retorno tipo HTML
    res.setHeader("Content-type", "text/html");
    //respuesta
    res.write(`
        <html>
            <head>
                <title> Enter Menssage</title>
            </head>
         <body>
             <h1>Send message</h1>
            <form action= "/message" method = "POST">
                <input type= "text" name="message">
                <button type= "submit">SEND</button>
            </form>
          </body>
        </html>
        `);
    res.end();
  }
   else if (url === "/message" && method === "POST") {
    //1. Se crea una variable para guardar todos los datos de entrada
    let body =[];
    //2. Registar un manejador para la entrada de datos
    req.on("data", (chunk)=>{
        //2.1 Registrando los trozos que llegan al backen o server
        console.log(`${chunk}`);
        //2.2 Acomulamos los datos de entrada
        body.push(chunk);
        //2.3 Proteccion en casi de recepcion masiva de datos
        if(body.length> 1e6) req.socket.destroy();
    }); 
    //3. reigistrando un manejador de fin de recepcion de datos
    req.on(`end`,()=>{
        const parseBOdy = Buffer.concat(body).toString();
        const message = parseBOdy.split('=')[1];
        //guardando el mensaje en ur archivo
        Fs.writeFileSync(`message.txt`, message);
        //Establecer el status code de redireccionamiento
        res.statusCode = 302;
        // Establecer la ruta de direcciones
        res.setHeader(`Location`,`/`);
        //Finalizo la coneccion
        return res.end();
    });
  } else if (url === "/autor") {
    //s24 enrutando dos recursos
    res.setHeader("Content-type", "text/html");
    //respuesta
    res.write(`<html>`);
    res.write(`<head><title>Autor</title></head>`);
    res.write(
      `<Body><h1>Carlos Augusto Cruz Cruz</h1><br><p>Recurso Solicitdado: ${req.url}`
    );
    res.write(
      `</p><br><img  src="https://avatars.githubusercontent.com/u/92931689?s=400&u=ca25d563312b96bb0597dac5977b81e22fc979f3&v=4" width="250px"> </Body>`
    );
    res.write(`</html>`);
    res.end();
  } else if (url === "/tec") {
    //s24 enrutando dos recursos
    res.setHeader("Content-type", "text/html");
    //respuesta
    res.write(`<html>`);
    res.write(`<head><title>ITGAM</title></head>`);
    res.write(
      `<Body><h1>Instituto Tecnologico Gustavo A. Madero</h1><br><p>Recurso Solicitdado: ${req.url}</p><br><img width="250px" src="https://yosoy.dev/wp-content/uploads/2018/04/itgam.jpg"></Body>`
    );
    res.write(`</html>`);
    res.end();
  } else {
    res.setHeader("Content-type", "text/html");
    //respuesta
    res.write(`<html>`);
    res.write(`<head><title>My App</title></head>`);
    res.write(
      `<Body><h1>Recurso no encontrado</h1><img src="https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg" width="100%"></Body>`
    );
    res.write(`</html>`);
    res.end();
  }
});
//3. poniendo a trabajar el servidor (puerto +3000, ip)
//a espera de peticiones
server.listen(3000, "0.0.0.0", () => {
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});
console.log("Enrutamiento de peticiones");
