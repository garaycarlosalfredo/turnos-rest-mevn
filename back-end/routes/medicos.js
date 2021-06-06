const express = require('express')
const router = express.Router()
const MedicoController = require('../controllers/medicoController')

//Crear un médico en la base de datos
router.post('/', 
    MedicoController.crearMedico
)

//Busqueda de medicos en la base de datso
router.get('/',
    MedicoController.buscarMedico
)

//Busqueda de medicos en la base de datso
router.put('/:id',
    MedicoController.actualizarMedico
)

//Busqueda de medicos en la base de datso
router.delete('/:id',
    MedicoController.borrarMedico
)

module.exports = router