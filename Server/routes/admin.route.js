//1 importando enrutador de express
import { Router } from "express";
import { ROOT_DIR } from "../helpers/path.helper.js";
import path from 'path';

//---------Base de datos volatil en la ram
export const products = [];



// 2 crear una instancias del enrutador
export const router = Router();
//3. Registrar rutas a mi enrutador
//router.<vervo>(<sub-ruta>,<request handler>);
//siver el formulario para agregar producto
//GET: admin/add-product
router.get('/add-product', (_, res)=>{
    const fPath = path.join(ROOT_DIR,"server","views","add-product.html")
    res.sendFile(fPath);
});
//procesa el formulario para agregar producto
//POST: admin/add-product
router.post('/add-product', (req, res)=>{
    //Desestructurando el body de la peticion
    const { name } = req.body;
    //guardar en la BD el nombre del producto
    products.push({name});
    //redirecciono a la pantalla de inicio
    res.redirect('/')
    // Respondiendo en JSON el body
  
});
//Exportando el router de la subruta de admin
//export default router;
