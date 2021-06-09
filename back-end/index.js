const express = require('express')         //llamado de express
const db_conectar = require('./config/db') //Configuración de la base de datos
const cors = require('cors')               //Habilitas el cors

//Crear el servidor
const server = express()

//Habilitar el cors (Para permitir peticiones del front)
server.use(cors())  //Cuando vaya a acceder desde un fron angular, react, etcc...

//Conectar la base de datos
db_conectar()

//Habilitar express.json (Permite que express utilice formato json)
server.use(express.json({extends: true}))

//Prueba pagina principal
server.get('/', (req,res)=>{
    res.send({msg : 'Hola mundo'})
})

//Importar las rutas
server.use('/api/pacientes', require('./routes/pacientes'))//Ruta para ir a paciente
server.use('/api/medicos', require('./routes/medicos'))//Ruta para ir a medico
server.use('/api/turnos', require('./routes/turnos'))//Ruta para ir a medico

//Correr el servidor
server.listen(process.env.PORT, ()=>{
    console.log(`El servidor ${process.env.NAME} está escuchando en el puerto ${process.env.PORT}`)
})