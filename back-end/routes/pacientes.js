const express = require('express')
const router = express.Router()
const PacienteController = require('../controllers/pacienteController')
const {check} = require('express-validator')

//Crear un paciente nuevo
router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('dni','El número de DNI es obligatorio').isNumeric()
    ],
    PacienteController.crearPaciente
)

//Buscar un paciente
router.get('/',
    PacienteController.buscarPaciente
)

//Actualizar un paciente
router.put('/:id',
    PacienteController.actualizarPaciente
)

//Borrar un paciente de la base de datos
router.delete('/:id',
    PacienteController.borrarPaciente
)


module.exports = router