//1. importando modulo http
import http from "http";
import routes from "./routes.js";

//2. crear servidor
//cb (callBAck) es una funcion que se ejecuta ante cualquier peticion de nuestro Server
//(request, response)

//las tres formas de declarar una funcion
//Arrow function, funsio declaretion
const server = http.createServer(routes.requestHandler);
//3. poniendo a trabajar el servidor (puerto +3000, ip)
//a espera de peticiones
server.listen(3000, "0.0.0.0", () => {
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});
console.log("Enrutamiento de peticiones");
