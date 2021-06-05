const mongoose = require('mongoose')
require('dotenv').config({path: 'variables.env'})

const db_conectar = async ()=>{
    try {
        await mongoose.connect(
            process.env.BD_MONGO,{
                useNewUrlParser:true,
                useUnifiedTopology: true,
                useFindAndModify: false            
        })
        console.log(`Base de datos conectado (${process.env.BD_MONGO})`)
    } catch (error) {
        console.log(error)
        process.exit(1)//Detener la app
    }
}

module.exports = db_conectar