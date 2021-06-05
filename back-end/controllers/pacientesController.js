const Paciente = require('../models/Paciente')


exports.crearPaciente = async (req,res)=>{
    try {
        //Crear Paciente
        const paciante = new Paciente(req.body)
        //Guardar en la base
        paciante.save()
        res.json(paciante)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al intentar crear el paciente')
    }
}