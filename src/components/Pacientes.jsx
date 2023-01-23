const Pacientes = ( {indice} ) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5 my-10">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre:{' '} <span className="font-normal 
          normal-case">{indice.mascota}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{' '} <span className="font-normal
           normal-case">{indice.propetario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{' '} <span className="font-normal 
          normal-case">{indice.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de Ingreso:{' '} <span className="font-normal 
          normal-case">{indice.fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas:{' '} <span className="font-normal 
          normal-case">{indice.sintomas}</span>
        </p>
      </div>
  )
}

export default Pacientes