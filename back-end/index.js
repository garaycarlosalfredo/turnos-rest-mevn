const express = require('express')         //llamado de express
const db_conectar = require('./config/db') //Configuración de la base de datos
//const cors = require('cors')               //Habilitas el cors

//Crear el servidor
const server = express()

//Conectar la base de datos
db_conectar()

//Habilitar el cors (Para permitir peticiones del front)
//server.use(cors)  //Cuando vaya a acceder desde un fron angular, react, etcc...

//Habilitar express.json (Permite que express utilice formato json)
server.use(express.json({extends: true}))

//Prueba pagina principal
server.get('/', (req,res)=>{
    res.send({msg : 'Hola mundo'})
})

//Importar las rutas
server.use('/api/paciente', require('./routes/pacientes'))//Ruta para ir a paciente

//Correr el servidor
server.listen(process.env.PORT, ()=>{
    console.log(`El servidor ${process.env.NAME} está escuchando en el puerto ${process.env.PORT}`)
})