const mongoose = require('mongoose')

const TurnoSchema = mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    paciente_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    medico_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    },
    tratamiento:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tratamiento'
    }],
    motivo:{
        type: String
    },
    revision:{
        type: String
    }

})

module.exports = mongoose.model('Turno',TurnoSchema)