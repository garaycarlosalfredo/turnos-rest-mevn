const mongoose = require('mongoose')

const PacienteSchema = mongoose.Schema({
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
    //Fecha de nacimiento
    nacimiento:{
        type: Date,
        default: Date.now()

    },
    //Numero celular
    telefono : {
        type: Number,
    },
    //Alergias del paciente, resumen clinico
    clinica : [{
        type: String,
    }],
    //Prepaga del paciente
    prepaga_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prepaga'
    },

    //Historial(Turnos)
    turnos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turno'
    }]
})

module.exports = mongoose.model('Paciente', PacienteSchema)