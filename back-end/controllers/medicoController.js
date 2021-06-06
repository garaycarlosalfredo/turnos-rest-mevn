const Medico = require('../models/Medico')
const {medicoSimplificado,actualizarMedico} = require('../util/medicosUtil')


exports.crearMedico = async (req,res)=>{
    try {
        //Crear Medico
        const medico = new Medico(req.body)
        //Guardar en la base
        medico.save()
        //Responder los datos del médico creado
        res.json(medico)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al intentar crear el medico')
    }
}

exports.buscarMedico = async (req,res)=>{
    try {
        //Buscar por DNI
        if(req.query.dni){
            const medico = await Medico.find({dni: req.query.dni})
            const respuesta = medicoSimplificado(medico)
            res.json({respuesta})
        }

        //Buscar por Id
        if(req.query._id){
            const medico = await Medico.findById(req.query._id)
            res.json({medico})
        }
         
        //Buscar por nombre o apellido
        if(req.query.nombre || req.query.apellido){ 
            
            if(!req.query.apellido){    //Si solo se ingresó el nombre
                const medico = await Medico.find({nombre: req.query.nombre})
                const respuesta = medicoSimplificado(medico)
                res.json({respuesta})
            }

            if(!req.query.nombre){    //Si solo se ingresó el apellido
                const medico = await Medico.find({apellido: req.query.apellido})
                const respuesta = medicoSimplificado(medico)
                res.json({respuesta})
            }

            if(req.query.nombre && req.query.apellido){    //Si se ingresó el nombre y el apellido
                const medico = await Medico.find({nombre: req.query.nombre , apellido: req.query.apellido })
                const respuesta = medicoSimplificado(medico)
                res.json({respuesta})   
            }
        }

        res.json({ msg : 'No hay ningún criterio de busqueda seleccionado'})
    } catch (error) {
        
    }
}


//Actualizar medico
exports.actualizarMedico = async(req,res)=>{
    const medicoActualizado = actualizarMedico(req.body)
    if(medicoActualizado == null){return res.status(400).json({msg : 'No hay datos a modificar'})}

    try {
        let medico = await Medico.findByIdAndUpdate(
            {_id : req.params.id},
            {$set : medicoActualizado},
            {new : true}
        )

        res.json({medico})
        
    } catch (error) {        
        res.status(500).send('Error en el servidor al intentar actualizar el medico')
    }

}

//Eliminar un Medico
exports.borrarMedico = async (req,res)=>{

    try {
        //Primero verificar que existe
        let medico = await Medico.findById({_id : req.params.id})

        //Si no existe
        if(!medico){return res.status(400).json({msg : 'El medico no existe'})}

        //Si lo encontró se elimina
        await Medico.findByIdAndDelete({_id : req.params.id})
        res.json({msg : 'medico borrado'})

    } catch (error) {
        res.status(500).send('Error en el servidor intentando eliminar el medico')        
    }
}