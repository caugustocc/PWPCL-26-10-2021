//1 importando enrutador de express
import { Router } from "express";
// 2 crear una instancoa del enrutador
const router = Router();
//3. Registrar rutas a mi enrutador
//router.<vervo>(<sub-ruta>,<request handler>);
//siver el formulario para agregar producto
//GET: admin/add-product
router.get('/add-product', (_, res)=>{
    
    res.send(`
  <form action="add-product" method="POST">
  <label for= "product-name"> ☕ Nombre del poducto </label>
  <input type= "text" name= "name" id="product-name">
  <button type="submit">☕ Add Product</button>
  </form>
  `);
});
//procesa el formulario para agregar producto
//POST: admin/add-product
router.post('/add-product', (req, res)=>{
    //Desestructurando el body de la peticion
    const { body } = req;
    // Respondiendo en JSON el body
    res.json(body)
});
//Exportando el router de la subruta de admin
export default router;