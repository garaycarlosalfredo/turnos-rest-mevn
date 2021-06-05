const express = require('express')
const router = express.Router()
const PacienteController = require('../controllers/pacientesController')

router.post('/', PacienteController.crearPaciente)


module.exports = router