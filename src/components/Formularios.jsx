import  {useState, useEffect} from "react"
const Formularios = ()=> {
  const {nombre, setNombre} = useState(' ');
  setNombre('Trosky')
  console.log(nombre);
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'> Seguimiento a pacientes</h2>
      <p className=' text-lg mt-5 text-center mb-10'>
        Añade Pacientes{" "}
      
      <span className='text-indigo-600 font-bold '>
        Administralos
      </span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la Mascota</label>
          <input  id='mascota' type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre de la Mascota'
          value={nombre} onChange={(e)=>console.log(setNombre(e.target.value))} />
        </div>

      

      
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Propietario</label>
          <input  id='propietario' type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre del propietario'/>
          uppercase font-bold "Nombre Mascotas"
        </div>

      
    
        <div className='mb-5'>
          <label htmlFor='Email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input  id='Email' type="email" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Email del Propietario'/>

        </div>

        <div className='mb-5'>
          <label htmlFor='fecha' className='block text-gray-700 uppercase font-bold'>Fecha de Ingreso</label>
          <input  id='fecha' type="date" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />

        </div>
        
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea  id="sintomas" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Describe los sintomas'></textarea>

        </div>

       



      </form>
      
    </div>

    
    
  )
}

export default Formulario