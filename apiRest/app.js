const usuarios=require('./routes/usuarios')
const cursos=require('./routes/cursos')
const auth=require('./routes/auth')
const express=require('express')
const mongoose=require('mongoose')
const config=require('config')
const MONGODB_URI = require('../apiRest/config/config');


// Conectarnos a la base de datos
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=> console.log('Conectado a mongoDB...'))
  .catch(err=>console.log('No se logro establecer la conexion',err))
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/usuarios',usuarios);
app.use('/api/cursos',cursos);
app.use('/api/auth',auth);

const port=process.env.PORT || 3000
app.listen(port,()=>{
  console.log('Api Rest ');
})