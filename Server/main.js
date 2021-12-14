
// Importando express
import  Express  from "express";
import path from "path";
import {ROOT_DIR} from "./helpers/path.helper.js";
//importar enrutadores
import {router as adminRoute} from './routes/admin.route.js';
//importando homeroute.js
import homeRoute from "./routes/home.route.js";

console.log(`variable de entorno ${process.env.NODE_ENV || "No establecido"}`)
//creae una instancia de Express
const app = Express(); 

//insertando middleware para
//la lectura de datos desde el cliente
app.use(Express.urlencoded({extended: false}));

//el orden deve de ser del mas especifico al general, pues si es 
//el "/" (directorio raiz) cae la funciion directa en esta y no 
//prosigue la busqueda

//-------ASOCIANDO RUTAS A MIDDLEWARE------

app.use((req,_, next)=>{
  console.log(`Peticion realizada: "${req.method} : ${req.path}"`);
  next();
});
//Registando el middleware que maneja el servicio de archivos estaticos
app.use(Express.static(path.join(ROOT_DIR,'public')));

//Se agrega a la aplicacion la ruta admin
app.use('/admin',adminRoute);
app.use(homeRoute);
// Respuesta 404
app.use((_, res, next)=>{
  const fPath = path.join(ROOT_DIR,"server","views","404.html")
  res.sendFile(fPath)
});


app.listen(3000, `0.0.0.0`,()=>{
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});

