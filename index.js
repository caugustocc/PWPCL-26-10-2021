//1. importando modulo http
import http from "http";
//2. importando modulo de routes
import routes from "./routes.js";
//3. Importando express
import  Express  from "express";

//creae una instancia de Express
const app = Express(); 
console.log(`variable de entorno ${process.env.NODE_ENV || "No establecido"}`)
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

app.use(`/about`,(_,res)=>{
 
  res.send("<h1> Mi APP </h1>\n 🎯 Sitio con NodeJs")
});

app.use(`/add-student-form`,(req, res, next)=>{
  res.send(`
  <form action="/add-student" method="POST">
  <label for= "student-name">🤷‍♂️Student Name </label>
  <input type= "text" name= "name" id="student-name">
  <button type="submit">✔ Add Student</button>
  </form>
  `);
})

//ruta que procesa el formulario
app.post('/add-student',(req, res, next)=>{
  for(const prop in req.body){
    console.log(`👉 ${prop}: ${req.body[prop]}`);
  }
  console.log(`👉 metodo : ${req.method}`);

  res.json(req.body);
  // //realizando redireccionamiento
  // res.redirect(`/`);
});


//recurso de formulario
app.use([`/`,`/home`],(_, res)=>{
 
  console.log("📌Emitiendo respuesta al cliente");
  res.send(`<h1>MI Respuesta</h1>\n ✨ 🎯Bienvenidos al sitio WEB`)
});

app.listen(3000, `0.0.0.0`,()=>{
  console.log(`Servidor Escuchando en http://192.168.1.66`);
});

