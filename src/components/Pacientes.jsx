const Pacientes = ( {indice,setPaciente} ) => {
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
        <div>
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase
           text-white rounded-lg"
           onClick={() => setPaciente(indice)}>
          Editar
          </button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase
           text-white rounded-lg">
              Eliminar
          </button>
        </div>
      </div>
  )
}

export default Pacientes