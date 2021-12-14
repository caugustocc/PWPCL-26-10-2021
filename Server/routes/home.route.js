//1 importando enrutador de express
import { Router } from "express";
import {ROOT_DIR} from "../helpers/path.helper.js";
//import module Path
import path from 'path';

//importando el acceso a la BD
import { products } from "./admin.route.js";

const home = Router();
// rutas 
home.get(`/about`,(_,res)=>{ 
    res.send("<h1> Mi APP </h1>\n 🎯 Sitio con NodeJs")
  });
  home.get([`/`,`/home`],(_, res)=>{
    console.log(`☕Inventario de productos ${JSON.stringify(products)}`)
    console.log(`sirviendo recursos: 'shop.html'`)
    res.render('shop')
  
  });

  export default home;
