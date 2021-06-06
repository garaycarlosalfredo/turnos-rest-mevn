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

exports.actualizarPaciente = (paciente)=>{

    var pacienteActualizado = {}
    const{nombre,apellido,dni,nacimiento,telefono,clinica,prepaga_id,turnos} = paciente

    if(nombre){pacienteActualizado.nombre = nombre}
    if(apellido){pacienteActualizado.apellido = apellido}
    if(dni){pacienteActualizado.dni = dni}
    if(nacimiento){pacienteActualizado.nacimiento = nacimiento}
    if(telefono){pacienteActualizado.telefono = telefono}
    if(clinica){pacienteActualizado.clinica = clinica}
    if(prepaga_id){pacienteActualizado.prepaga_id = prepaga_id}
    if(turnos){pacienteActualizado.turnos = turnos}

    if (!nombre
        &&!apellido
        &&!dni
        &&!nacimiento
        &&!telefono
        &&!clinica
        &&!prepaga_id
        &&!turnos){pacienteActualizado = null}
    return pacienteActualizado
}
