//1. importando modulo http
import http from "http";
//2. importando modulo de routes
import routes from "./routes.js";
//3. Importando express
import  Express  from "express";

//creae una instancia de Express
const app = Express(); 
//Registrando el primer middleware
app.use((req, res, next)=>{
  //Registrar un mensaje en el log
  console.log("📍 Estoy en el middleware 1");
  next()
})
//registrando el segundo middlewer
app.use((req, res, next)=> {
  //Registrar un mensaje en el log
  console.log("📍 Estoy en el middleware 2");
  next()
});
app.use((req, res)=>{
  console.log("📍 Estoy en el middleware 3");
  console.log("📌Emitiendo respuesta al cliente");
  res.send(`<h1>MI Respuesta</h1>\n ✨ HOLA`)
});

app.listen(3000, `0.0.0.0`,()=>{
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});

