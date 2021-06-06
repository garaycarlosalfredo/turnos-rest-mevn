const mongoose = require('mongoose')

const MedicoSchema = mongoose.Schema({
    nombre : {
        type: String,
        require: true,
        trim: true
    },
    apellido : {
        type: String,
        require: true,
        trim: true
    },
    dni : {
        type: Number,
        require: true,
        unique: true
    },
    matricula : {
        type: Number,
        require: true,
        unique: true
    },
    //Numero celular
    telefono : {
        type: Number,
    },
    //Alergias del paciente, resumen clinico
    especialidad : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Especialidad'
    }],
})

module.exports = mongoose.model('Medico', MedicoSchema)