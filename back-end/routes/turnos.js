const express = require('express')
const router = express.Router()
const TurnoController = require('../controllers/TurnoController')

//Crear un médico en la base de datos
router.post('/', 
    TurnoController.crearTurno
)

//Busqueda de medicos en la base de datso
router.get('/',
    TurnoController.buscarTurno
)

//Busqueda de medicos en la base de datso
router.put('/:id',
    TurnoController.actualizarTurno
)

//Busqueda de medicos en la base de datso
router.delete('/:id',
    TurnoController.borrarTurno
)

module.exports = router