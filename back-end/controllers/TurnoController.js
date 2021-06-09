const Turno = require('../models/Turno')
const {actualizarTurno} = require('../util/turnosUtil')


exports.crearTurno = async (req,res)=>{
    try {
        //Crear Turno
        const turno = new Turno(req.body)
        //Guardar en la base
        turno.save()
        //Responder con los datos del Turno creado
        res.json(turno)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al intentar crear el turno')
    }
}

exports.buscarTurno = async (req,res)=>{
    try {
        //Buscar los turno por _id médico
        if(req.query.medico_id){
            const turno = await Turno.find({medico_id: req.query.medico_id})
            res.json({turno})
            return//Sin este return node da un error como si quisiera seguir buscarndo
        }

        //Buscar los turno por _id paciente
        if(req.query.paciente_id){
            const turno = await Turno.find({paciente_id: req.query.paciente_id})
            res.json({turno})
            return//Sin este return node da un error como si quisiera seguir buscarndo
        }

        //Buscar los turno por _id paciente
        if(req.query.fecha){
            const turno = await Turno.find({fecha: req.query.fecha})
            res.json({turno})
            return//Sin este return node da un error como si quisiera seguir buscarndo
        }

        //Buscar los turno por _id paciente
        if(req.query.tratamiento){
            const turno = await Turno.find({tratamiento: req.query.tratamiento})
            res.json({turno})
            return//Sin este return node da un error como si quisiera seguir buscarndo
        }

        res.json({ msg : 'No hay ningún criterio de busqueda seleccionado'})
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error buscando al paciente')
    }
}


//Actualizar turno
exports.actualizarTurno = async(req,res)=>{
    const turnoActualizado = actualizarTurno(req.body)
    if(turnoActualizado == null){return res.status(400).json({msg : 'No hay datos a modificar'})}

    try {
        let turno = await Turno.findByIdAndUpdate(
            {_id : req.params.id},
            {$set : turnoActualizado},
            {new : true}
        )

        res.json({turno})
        
    } catch (error) {        
        res.status(500).send('Error en el servidor al intentar actualizar el turno')
    }

}

//Eliminar un Turno
exports.borrarTurno = async (req,res)=>{

    try {
        //Primero verificar que existe
        let turno = await Turno.findById({_id : req.params.id})

        //Si no existe
        if(!turno){return res.status(400).json({msg : 'El turno no existe'})}

        //Si lo encontró se elimina
        await Turno.findByIdAndDelete({_id : req.params.id})
        res.json({msg : 'turno borrado'})

    } catch (error) {
        res.status(500).send('Error en el servidor intentando eliminar el turno')        
    }
}

