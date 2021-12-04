//1 importando enrutador de express
import { Router } from "express";
const home = Router();
// rutas 
home.use(`/about`,(_,res)=>{ 
    res.send("<h1> Mi APP </h1>\n 🎯 Sitio con NodeJs")
  });
  home.use([`/`,`/home`],(_, res)=>{
    console.log("📌Emitiendo respuesta al cliente");
    res.send(`<h1>MI Respuesta</h1>\n ✨ 🎯Bienvenidos al sitio WEB`)
  });
  export default home;
