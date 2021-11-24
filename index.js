//1. importando modulo http
import http from "http";
//2. importando modulo de routes
import routes from "./routes.js";
//3. Importando express
import  Express  from "express";

//creae una instancia de Express
const app = Express(); 
//el orden deve de ser del mas especifico al general, pues si es 
//el "/" (directorio raiz) cae la funciion directa en esta y no 
//prosigue la busqueda
app.use(`/about`,(_,res)=>{
  console.log(`👀 se realizo la peticion: "/about"`)
  res.send("<h1> Mi APP </h1>\n 🎯 Sitio con NodeJs")
})
app.use([`/`,`/home`],(_, res)=>{
  console.log('📍 Estoy en el middleware 3: "/"');
  console.log("📌Emitiendo respuesta al cliente");
  res.send(`<h1>MI Respuesta</h1>\n ✨ 🎯Bienvenidos al sitio WEB`)
});

app.listen(3000, `0.0.0.0`,()=>{
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});

