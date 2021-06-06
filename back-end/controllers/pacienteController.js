const Paciente = require('../models/Paciente')
const {validationResult} = require('express-validator')
const {pacienteSimplificado,actualizarPaciente} = require('../util/pacientesUtil')


exports.crearPaciente = async (req,res)=>{

    //Validator avisa si hay algún error de los definidos en el routes
    const errores = validationResult(req)
    if(!errores.isEmpty()){return res.status(400).json({errores : errores.array()})}


    try {

        //Crear Paciente
        const paciante = new Paciente(req.body)
        //Guardar en la base
        paciante.save()
        //Responder los datos del paciente creado
        res.json(paciante)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al intentar crear el paciente')
    }
}

exports.buscarPaciente = async (req,res)=>{
    try {
        //Buscar por DNI
        if(req.query.dni){
            const paciente = await Paciente.find({dni: req.query.dni})
            const respuesta = pacienteSimplificado(paciente)
            res.json({respuesta})
        }

        //Buscar por Id
        if(req.query._id){
            const paciante = await Paciente.findById(req.query._id)
            res.json({paciante})
        }

        //Buscar por nombre o apellido
        if(req.query.nombre || req.query.apellido){ 
            
            if(!req.query.apellido){    //Si solo se ingresó el nombre
                const paciente = await Paciente.find({nombre: req.query.nombre})
                const respuesta = pacienteSimplificado(paciente)
                res.json({respuesta})
            }

            if(!req.query.nombre){    //Si solo se ingresó el apellido
                const paciente = await Paciente.find({apellido: req.query.apellido})
                const respuesta = pacienteSimplificado(paciente)
                res.json({respuesta})
            }

            if(req.query.nombre && req.query.apellido){    //Si se ingresó el nombre y el apellido
                const paciente = await Paciente.find({nombre: req.query.nombre , apellido: req.query.apellido })
                const respuesta = pacienteSimplificado(paciente)
                res.json({respuesta})   
            }
        }

        res.json({ msg : 'No hay ningún criterio de busqueda seleccionado'})
    } catch (error) {
        
    }
}

//Actualizar paciente
exports.actualizarPaciente = async(req,res)=>{

    //Validator avisa si hay algún error de los definidos en el routes
    const errores = validationResult(req)
    if(!errores.isEmpty()){return res.status(400).json({errores : errores.array()})}

    const pacienteActualizado = actualizarPaciente(req.body)
    if(pacienteActualizado == null){return res.status(400).json({errores : errores.array()})}

    try {
        let paciente = await Paciente.findByIdAndUpdate(
            {_id : req.params.id},
            {$set : pacienteActualizado},
            {new : true}
        )

        res.json({paciente})
        
    } catch (error) {        
        res.status(500).send('Error en el servidor al intentar acutualizar el usuario')
    }

}

//Eliminar un paciente
exports.borrarPaciente = async (req,res)=>{

    try {
        //Primero verificar que existe
        let paciente = await Paciente.findById({_id : req.params.id})

        //Si no existe
        if(!paciente){return res.status(400).json({msg : 'El paciente no existe'})}

        //Si lo encontró se elimina
        await Paciente.findByIdAndDelete({_id : req.params.id})
        res.json({msg : 'Paciente borrado'})

    } catch (error) {
        res.status(500).send('Error en el servidor intentando eliminar el paciente')        
    }
}