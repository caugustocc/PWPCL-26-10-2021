//1 importando enrutador de express
import { Router } from "express";
//import module Path
import path from 'path';
const home = Router();
// rutas 
home.get(`/about`,(_,res)=>{ 
    res.send("<h1> Mi APP </h1>\n 🎯 Sitio con NodeJs")
  });
  home.get([`/`,`/home`],(_, res)=>{
    const filePath = path.join(path.resolve(),"server","views","shop.html")
    res.sendFile(filePath)
  });

  export default home;
