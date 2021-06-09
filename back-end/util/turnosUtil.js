exports.pacienteSimplificado = (paciente)=>{

    const pacienteSimplificado= paciente.map(function(paciente){
        
        var simplificado = {
            _id : paciente._id,
            nombre : paciente.nombre,
            apellido : paciente.apellido,
            dni : paciente.dni,
        }
        
        return simplificado
    })

    return pacienteSimplificado
}

exports.actualizarTurno = (turno)=>{

    var turnoActualizado = {}
    const{fecha,paciente_id,medico_id,motivo,revision,tratamiento} = turno

    if(fecha){turnoActualizado.fecha = fecha}
    if(paciente_id){turnoActualizado.paciente_id = paciente_id}
    if(medico_id){turnoActualizado.medico_id = medico_id}
    if(motivo){turnoActualizado.motivo = motivo}
    if(revision){turnoActualizado.revision = revision}
    if(tratamiento){turnoActualizado.tratamiento = tratamiento}

    if (!fecha
        &&!paciente_id
        &&!medico_id
        &&!motivo
        &&!revision
        &&!tratamiento){turnoActualizado = null}
    return turnoActualizado
}
