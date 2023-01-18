import Pacientes from "./Pacientes"
function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3x1 text-center">Listado Pacientes</h2>
     <p className="text-xl mt-5 mb-10 text-center">
       Administra Tus {' '}
       <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
     </p>

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl"></div>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          NOMBRE:{'  '} <span className="font-normal normal-case">Trosky
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          PROPETARIO:{'  '} <span className="font-normal normal-case">Sebastuan Rojas Polania</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
          Correo:{'  '} <span className="font-normal normal-case">sc.rojas_2019-1@corhuila.edu.co</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
          FECHA DE Ingreso:{'  '} <span className="font-normal normal-case">17 de Enero de 2023 </span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
          SINTOMAS:{'  '} <span className="font-normal normal-case">Lorem 
          ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, quam dolor ad atque minus ab omnis nihil odit consectetur. Blanditiis placeat quia assumenda voluptates, amet exercitationem reiciendis! Inventore libero voluptatibus, alias corporis praesentium, rem facilis, ad optio nulla quae molestias!</span>
          </p>
          <Pacientes />
          <Pacientes />
          <Pacientes />
       </div>

  )
}

export default ListadoPacientes
