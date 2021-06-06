exports.medicoSimplificado = (medico)=>{

    const medicoSimplificado= medico.map(function(medico){
        
        var simplificado = {
            _id : medico._id,
            nombre : medico.nombre,
            apellido : medico.apellido,
            dni : medico.dni,
        }
        
        return simplificado
    })

    return medicoSimplificado
}

exports.actualizarMedico = (medico)=>{

    var medicoActualizado = {}
    const{nombre,apellido,dni, matricula,nacimiento,telefono,clinica,prepaga_id,turnos} = medico

    if(nombre){medicoActualizado.nombre = nombre}
    if(apellido){medicoActualizado.apellido = apellido}
    if(dni){medicoActualizado.dni = dni}
    if(matricula){medicoActualizado.matricula = matricula}
    if(nacimiento){medicoActualizado.nacimiento = nacimiento}
    if(telefono){medicoActualizado.telefono = telefono}
    if(clinica){medicoActualizado.clinica = clinica}
    if(prepaga_id){medicoActualizado.prepaga_id = prepaga_id}
    if(turnos){medicoActualizado.turnos = turnos}

    if (!nombre
        &&!apellido
        &&!dni
        &&!matricula
        &&!nacimiento
        &&!telefono
        &&!clinica
        &&!prepaga_id
        &&!turnos){medicoActualizado = null}
    return medicoActualizado
}
